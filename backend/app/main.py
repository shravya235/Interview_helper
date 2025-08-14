# Entry point for the backend application
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Interview Prep API"}
