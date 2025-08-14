# Pydantic models for user profile
from pydantic import BaseModel

class ProfileUpdate(BaseModel):
    email: str
    name: str
    bio: str = None
