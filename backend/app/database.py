from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# Database URL - SQLite für Development
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./voicelink.db")

# SQLite spezifische Engine-Einstellungen
engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}  # Nur für SQLite nötig
)

# Session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class für Models
Base = declarative_base()

# Dependency für FastAPI - stellt DB Session zur Verfügung
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()