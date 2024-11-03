from fastapi import FastAPI
from recipes.masakapahariini import get_recipes, get_recipe_by_id

app = FastAPI()


@app.get("/recipes")
async def read_recipes():
    return get_recipes()


@app.get("/recipes/{recipe_id}")
async def read_recipe(recipe_id: str):
    return get_recipe_by_id(recipe_id)
