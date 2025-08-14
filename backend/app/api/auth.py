# Authentication routes
from fastapi import APIRouter

router = APIRouter()

@router.post("/login")
def login():
    return {"message": "Login route"}

@router.post("/signup")
def signup():
    return {"message": "Signup route"}
