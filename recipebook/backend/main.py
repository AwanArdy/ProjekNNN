from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from recipes.masakapahariini import get_recipes, get_recipe_by_id

app = FastAPI()
BASE_URL = "https://masak-apa.tomorisakura.vercel.app/api"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/recipes")
async def get_recipes():
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{BASE_URL}/recipes")
        if response.status_code != 200:
            raise HTTPException(status_code=500, detail="Failed to fetch recipes")
    return response.json()


@app.get("/api/search")
async def search_recipes(q: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{BASE_URL}/search?q={q}")
        if response.status_code != 200:
            raise HTTPException(status_code=500, detail="Failed to search recipes")
    return response.json()
