import requests

API_URL = "https://masak-apa-tomorisakura.vercel.app"


def get_recipes():
    response = requests.get(API_URL)
    response.raise_for_status()
    return response.json()


def get_recipe_by_id(recipe_id):
    response = requests.get(f"{API_URL}/{recipe_id}")
    response.raise_for_status()
    return response.json()
