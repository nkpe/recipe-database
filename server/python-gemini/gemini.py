import os
from dotenv import load_dotenv
import google.generativeai as genai
import sys

load_dotenv()

def gemini():
    gemini_api_key = os.getenv("GEMINI_API_KEY")

    genai.configure(api_key=gemini_api_key)
    model = genai.GenerativeModel("gemini-1.5-flash")
    argument = sys.argv[1]
    print("PYTHON ARGUMENT: ", argument)
    response = model.generate_content(sys.argv[1])
    print("PYTHON RESPONSE: ",response.text)
    return response.text

gemini()