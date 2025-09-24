from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
from typing import List
import uvicorn
try:
    import google.generativeai as genai
except ModuleNotFoundError:
    genai = None
    print("google.generativeai not installed. Install with: pip install google-generative-ai")
import openrouteservice as ors
import folium
import os
import random
import math
from dotenv import load_dotenv

# Initialize
load_dotenv()
app = FastAPI(title="Complete API - Chat & Map", version="1.0.0")

# CORS
# CORS: allow origins can be restricted via ALLOWED_ORIGINS env (comma-separated)
allowed_origins = os.getenv("ALLOWED_ORIGINS")
if allowed_origins:
    origins = [o.strip() for o in allowed_origins.split(",") if o.strip()]
else:
    origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Setup APIs
try:
    genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
    chat_model = genai.GenerativeModel('gemini-1.5-flash')
    print("✓ Gemini API ready")
except:
    chat_model = None
    print("✗ Gemini API failed")

try:
    map_client = ors.Client(key=os.getenv("OPEN_ROUTE_SERVICE_KEY"))
    print("✓ Map API ready")
except:
    map_client = None
    print("✗ Map API failed")

# Models
class ChatMessage(BaseModel):
    message: str

class ChatResponse(BaseModel):
    user_message: str
    response: str

# Helper function for map
def generate_locations(center, radius_km, n_bins, n_plants):
    lat_d = 111.0
    lon_d = 111.0 * math.cos(math.radians(center[1]))
    
    def random_point(rad):
        angle = 2 * math.pi * random.random()
        distance = rad * random.random()
        lon = center[0] + (distance * math.cos(angle) / lon_d)
        lat = center[1] + (distance * math.sin(angle) / lat_d)
        return lon, lat
    
    bins = [random_point(radius_km) for _ in range(n_bins)]
    plants = [random_point(radius_km + 5) for _ in range(n_plants)]
    return bins, plants

# ===== MAIN ROUTES =====
@app.get("/")
def home():
    """API home with all available endpoints"""
    return {
        "message": "Complete API is running",
        "services": {
            "chat": chat_model is not None,
            "map": map_client is not None
        },
        "endpoints": {
            "GET /": "This page",
            "GET /health": "Service status",
            "GET /chat-test": "Test chat (works in browser)",
            "POST /chat": "Send message to AI",
            "GET /models": "Available AI models",
            "GET /map": "Interactive waste collection map",
            "GET /docs": "API documentation"
        }
    }

@app.get("/health")
def health():
    """Check all services status"""
    return {
        "status": "healthy",
        "services": {
            "chat_service": "online" if chat_model else "offline", 
            "map_service": "online" if map_client else "offline"
        }
    }

# ===== CHAT ROUTES =====
@app.get("/chat-test", tags=["Chat"])
def chat_test():
    """Test chat - works in browser URL"""
    if not chat_model:
        return {"error": "Chat service not available"}
    
    try:
        response = chat_model.generate_content("Hello! Respond with a friendly greeting.")
        return {
            "test_message": "Hello! Respond with a friendly greeting.",
            "ai_response": response.text,
            "status": "success"
        }
    except Exception as e:
        return {"error": str(e)}

@app.get("/chat", tags=["Chat"])
def chat_get(msg: str = "Hello"):
    """Chat with GET request - works in browser URL with ?msg=your_message"""
    if not chat_model:
        return {"error": "Chat service not available"}
    
    try:
        response = chat_model.generate_content(msg)
        return {
            "your_message": msg,
            "ai_response": response.text,
            "status": "success",
            "tip": "Add ?msg=your_question to the URL"
        }
    except Exception as e:
        return {"error": str(e)}

@app.post("/chat", response_model=ChatResponse, tags=["Chat"])
def chat(message: ChatMessage):
    """Chat with AI - use Swagger UI or POST request"""
    if not chat_model:
        raise HTTPException(status_code=503, detail="Chat service unavailable")
    
    if not message.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")
    
    try:
        response = chat_model.generate_content(message.message)
        return ChatResponse(
            user_message=message.message,
            response=response.text
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/models", tags=["Chat"])
def get_models():
    """Get available AI models"""
    if not chat_model:
        raise HTTPException(status_code=503, detail="Chat service unavailable")
    
    try:
        available = []
        for model in genai.list_models():
            if 'generateContent' in model.supported_generation_methods:
                available.append(model.name)
        
        return {
            "current_model": "gemini-1.5-flash",
            "available_models": available
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ===== MAP ROUTES =====
@app.get("/map", response_class=HTMLResponse, tags=["Map"])
def get_map():
    """Interactive waste collection route map"""
    if not map_client:
        return HTMLResponse(
            "<h1>Map Service Unavailable</h1><p>OpenRouteService API not configured</p>",
            status_code=503
        )
    
    # Indore coordinates
    center = (23.249679554066244, 77.47123028310855)[::-1]  # (Lon, Lat)
    start = center
    
    # Generate random bin and plant locations
    bins, plants = generate_locations(center, 5, 10, 1)
    stops = [start] + bins + [plants[0]]
    
    # Get route
    route = None
    try:
        route = map_client.directions(coordinates=stops, profile="driving-car", format='geojson')
    except Exception as e:
        print(f"Route error: {e}")
    
    # Create map
    m = folium.Map(location=[center[1], center[0]], zoom_start=13)
    
    # Add markers
    for i, (lon, lat) in enumerate(bins):
        folium.Marker(
            [lat, lon], 
            popup=f"Waste Bin #{i+1}", 
            icon=folium.Icon(color='green', icon='trash', prefix='fa')
        ).add_to(m)
    
    for i, (lon, lat) in enumerate(plants):
        folium.Marker(
            [lat, lon], 
            popup=f"Processing Plant #{i+1}", 
            icon=folium.Icon(color='red', icon='industry', prefix='fa')
        ).add_to(m)
    
    folium.Marker(
        [start[1], start[0]], 
        popup="Start/Depot", 
        icon=folium.Icon(color='blue', icon='truck', prefix='fa')
    ).add_to(m)
    
    # Add route if available
    if route and 'features' in route:
        folium.GeoJson(
            route['features'][0], 
            name="Collection Route", 
            style_function=lambda x: {"color": "blue", "weight": 4, "opacity": 0.8}
        ).add_to(m)
    
    folium.LayerControl().add_to(m)
    return HTMLResponse(content=m.get_root().render())

@app.get("/map-info", tags=["Map"])  
def map_info():
    """Map service information"""
    return {
        "service": "map",
        "status": "online" if map_client else "offline",
        "description": "Waste collection route optimization",
        "location": "Indore, Madhya Pradesh, India"
    }

# ===== RUN SERVER =====
if __name__ == "__main__":
    print("\n🚀 Starting Complete API Server...")
    print(f"📱 Chat Service: {'✓' if chat_model else '✗'}")
    print(f"🗺️  Map Service: {'✓' if map_client else '✗'}")

    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", 8000))
    public_host = os.getenv("PUBLIC_HOST", f"http://{host}:{port}")

    print(f"\n📍 Available at: {public_host}")
    print(f"📖 Documentation: {public_host}/docs")
    print(f"🧪 Quick test: {public_host}/chat-test\n")

    uvicorn.run(app, host=host, port=port)