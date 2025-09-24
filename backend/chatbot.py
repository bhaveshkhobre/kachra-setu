# chatbot.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import uvicorn
try:
    import google.generativeai as genai
except ModuleNotFoundError:
    genai = None
    print("google.generativeai not installed. Install with: pip install google-generative-ai")
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(title="Gemini Chat API", version="1.0.0")

# CORS for frontend on localhost
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         "http://localhost:3000",
#         "http://127.0.0.1:3000",
#         "http://localhost:5173",
#         "http://127.0.0.1:5173",
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# Initialize Gemini API directly
try:
    api_key = os.getenv('GEMINI_API_KEY')
    if not api_key:
        raise ValueError("GEMINI_API_KEY environment variable is required")
    
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-1.5-flash')
    current_model = 'gemini-1.5-flash'
    print("Gemini API initialized successfully")
except Exception as e:
    print(f"Failed to initialize Gemini API: {e}")
    model = None
    current_model = None

# Pydantic models
class ChatMessage(BaseModel):
    message: str

class ChatResponse(BaseModel):
    user_message: str
    response: str

class ModelsResponse(BaseModel):
    current_model: str
    available_models: List[str]

@app.get("/")
async def home():
    """Home endpoint"""
    return {"message": "Gemini Chat API is running", "docs": "/docs"}

@app.post("/chat", response_model=ChatResponse)
async def chat(chat_message: ChatMessage):
    """Send a message and get AI response"""
    if not model:
        raise HTTPException(status_code=500, detail="Gemini API not available")
    
    if not chat_message.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")
    
    try:
        response = model.generate_content(chat_message.message)
        return ChatResponse(
            user_message=chat_message.message,
            response=response.text
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Optional: support trailing slash explicitly
@app.post("/chat/", response_model=ChatResponse)
async def chat_slash(chat_message: ChatMessage):
    return await chat(chat_message)

@app.get("/models", response_model=ModelsResponse)
async def get_models():
    """Get available Gemini models"""
    if not model:
        raise HTTPException(status_code=500, detail="Gemini API not available")
    
    try:
        # Get available models
        available_models = []
        for m in genai.list_models():
            if 'generateContent' in m.supported_generation_methods:
                available_models.append(m.name)
        
        return ModelsResponse(
            current_model=current_model,
            available_models=available_models
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "gemini_available": model is not None,
        "model": current_model
    }

if __name__ == "__main__":
    print("Starting Gemini Chat API with FastAPI...")
    print("Endpoints:")
    print("  GET  / - Home")
    print("  POST /chat - Send message")
    print("  GET  /models - Get models")
    print("  GET  /health - Health check")
    print("  GET  /docs - API documentation")

    uvicorn.run(app, host="127.0.0.1", port=8000)
