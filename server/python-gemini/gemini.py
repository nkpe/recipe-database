import os
from dotenv import load_dotenv
import google.generativeai as genai
import sys

load_dotenv()

def gemini():
    gemini_api_key = os.getenv("GEMINI_API_KEY")

    genai.configure(api_key=gemini_api_key)
    model = genai.GenerativeModel("gemini-1.5-flash")
    argumentPrompt = sys.argv[1]
    fullPrompt = "Given this website: " + argumentPrompt + """. Create a recipe with data stored in json as per this template: '{
    "name": "<Name of the recipe>",
    "description": "<Brief description of the dish>",
    "img": "<URL or path to the recipe image>",
    "ingredients": [
        {
        "quantity": "<Amount of the ingredient>",
        "unit": "<Unit of measurement (e.g., g, ml, tbsp)>",
        "item": "<Name or description of the ingredient>"
        }
    ],
    "instructions": [
        "<Step 1: Describe the first cooking step>",
        "<Step 2: Describe the next cooking step>",
        "<Continue adding steps until the recipe is complete>"
    ],
    "allergenCategories": ["<List of allergens, e.g., soy, gluten>"],
    "mealCategories": ["<Type of meal, e.g., meat, stir-fry, dessert>"],
    "totalTime": "<Total time in minutes>",
    "prepTime": "<Preparation time in minutes>",
    "featured": "false",
    "serves": "<Number of servings>",
    "urlSource": "<URL to the source or original recipe>"
    }
    '"""
    response = model.generate_content(sys.argv[1])
    print("PYTHON RESPONSE: ",response.text)
    return response.text

gemini()