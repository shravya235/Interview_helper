# Prep session model for the database
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from ..db.base import Base

class PrepSession(Base):
    __tablename__ = "prep_sessions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    company_url = Column(String)
    interviewer_name = Column(String, nullable=True)
    role_focus = Column(String)
    time_to_prepare = Column(Integer)
    notes = Column(String)

    user = relationship("User", back_populates="prep_sessions")
