# Common dependencies for the application
from sqlalchemy.orm import Session
from .db.session import get_db

def get_db_session():
    db: Session = next(get_db())
    try:
        yield db
    finally:
        db.close()
