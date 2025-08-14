# Pydantic models for interview prep
from pydantic import BaseModel

class PrepCreate(BaseModel):
    company_url: str
    interviewer_name: str = None
    role_focus: str
    time_to_prepare: int
    notes: str = None
