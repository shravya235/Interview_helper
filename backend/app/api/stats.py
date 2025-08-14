# Credits and usage history routes
from fastapi import APIRouter

router = APIRouter()

@router.get("/stats")
def get_stats():
    return {"message": "Get usage statistics route"}
