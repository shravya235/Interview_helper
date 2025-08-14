# Configuration file for environment variables and API keys
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")
DATABASE_URL = os.getenv("DATABASE_URL")
