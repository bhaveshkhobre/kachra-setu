# map.py
import openrouteservice as ors
from dotenv import load_dotenv
import folium
import os
import random
import math
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware

# --- Load API Key ---
load_dotenv()
api_key = os.getenv("OPEN_ROUTE_SERVICE_KEY")
if not api_key:
    raise ValueError("OPEN_ROUTE_SERVICE_KEY not found in environment variables.")

client = ors.Client(key=api_key)

# --- Helpers ---
def generate_mock_coords(center, radius_km, n_bins, n_plants):
    lat_d = 111.0
    lon_d = 111.0 * math.cos(math.radians(center[1]))
    
    def rand_point(rad):
        a = 2 * math.pi * random.random()
        d = rad * random.random()
        lon = center[0] + (d * math.cos(a) / lon_d)
        lat = center[1] + (d * math.sin(a) / lat_d)
        return lon, lat
    
    bins = [rand_point(radius_km) for _ in range(n_bins)]
    plants = [rand_point(radius_km + random.uniform(5, 10)) for _ in range(n_plants)]
    return bins, plants

# --- FastAPI App ---
app = FastAPI()

<<<<<<< HEAD:map.py
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

=======
>>>>>>> 4aa067a3e42dd23114db2d65b281a8c350c77c75:backend-py/services/map.py
@app.get("/", response_class=HTMLResponse)
async def get_map():
    center = (23.249679554066244, 77.47123028310855)[::-1]  # (Lon, Lat)
    start = center               # Keep start and center the same
    bins, plants = generate_mock_coords(center, 5, 10, 1)
    stops = [start] + bins + [plants[0]]
    
    # Try to get route from ORS
    try:
        route = client.directions(coordinates=stops, profile="driving-car", format='geojson')
    except Exception as e:
        print(f"ORS error: {e}")
        route = None
    
    # --- Create map ---
    m = folium.Map(location=[center[1], center[0]], zoom_start=13)
    
    for i, (lon, lat) in enumerate(bins):
        folium.Marker([lat, lon], popup=f"Bin #{i+1}", icon=folium.Icon(color='green', icon='trash', prefix='fa')).add_to(m)
    
    for i, (lon, lat) in enumerate(plants):
        folium.Marker([lat, lon], popup=f"Plant #{i+1}", icon=folium.Icon(color='red', icon='industry', prefix='fa')).add_to(m)
    
    folium.Marker([start[1], start[0]], popup="Start/Depot", icon=folium.Icon(color='blue', icon='truck', prefix='fa')).add_to(m)
    
    if route and 'features' in route:
        folium.GeoJson(route['features'][0], name="Route", style_function=lambda x: {"color": "blue", "weight": 5}).add_to(m)
    
    folium.LayerControl().add_to(m)
    
    return HTMLResponse(content=m.get_root().render())

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run("map:app", host="127.0.0.1", port=8000, reload=True)
