# Pydantic models for authentication
from pydantic import BaseModel

class UserCreate(BaseModel):
    email: str
    password: str

class UserInDB(UserCreate):
    hashed_password: str
