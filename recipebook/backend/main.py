from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from recipes.masakapahariini import get_recipes, get_recipe_by_id

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/recipes")
async def read_recipes():
    return get_recipes()


@app.get("/recipes/{recipe_id}")
async def read_recipe(recipe_id: str):
    return get_recipe_by_id(recipe_id)
