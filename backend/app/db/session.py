# Database connection setup
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .base import Base
from ..config import DATABASE_URL

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
