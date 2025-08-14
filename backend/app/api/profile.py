# User profile CRUD routes
from fastapi import APIRouter

router = APIRouter()

@router.get("/profile")
def get_profile():
    return {"message": "Get user profile route"}

@router.put("/profile")
def update_profile():
    return {"message": "Update user profile route"}
