# Interview prep logic routes
from fastapi import APIRouter

router = APIRouter()

@router.post("/prep")
def create_prep():
    return {"message": "Create prep session route"}
