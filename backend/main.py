from fastapi import FastAPI, Query, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional, List
from contextlib import asynccontextmanager

from backend.models import Client, ClientCreate, InquiryCreate, Inquiry, SystemStats
from backend.database import (
    init_db,
    get_all_clients,
    insert_client,
    save_inquiry,
    get_all_inquiries,
    get_system_stats
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize database tables and initial seed data on startup
    init_db()
    yield

app = FastAPI(
    title="Scimax Industries API",
    description="Backend API service for Scimax Industries B2B Portal (Dust Collection, Pollution Control & Industrial Fans)",
    version="1.0.0",
    lifespan=lifespan
)

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://scimax-industries.vercel.app",
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["Health"])
def root():
    return {
        "status": "online",
        "service": "Scimax Industries Backend API",
        "version": "1.0.0",
        "docs": "/docs",
        "endpoints": {
            "clients": "/api/clients",
            "inquiries": "/api/inquiries",
            "stats": "/api/stats"
        }
    }

@app.get("/api/clients", response_model=List[Client], tags=["Clients"])
def list_clients(
    sector: Optional[str] = Query(None, description="Filter clients by sector (e.g. Steel, Cement, Chemicals, Pharma)"),
    featured: Optional[bool] = Query(False, description="Return only featured enterprise clients")
):
    """
    Retrieve list of Scimax Industries clientele and installations.
    """
    clients = get_all_clients(sector=sector, featured_only=featured or False)
    return clients

@app.post("/api/clients", response_model=Client, status_code=status.HTTP_201_CREATED, tags=["Clients"])
def create_client(client: ClientCreate):
    """
    Register a new industrial client installation.
    """
    new_client = insert_client(client.model_dump())
    return new_client

@app.post("/api/inquiries", tags=["Inquiries"])
def submit_inquiry(inquiry: InquiryCreate):
    """
    Submit an RFQ or technical inquiry from the website.
    Logs to SQLite database and triggers notification workflow.
    """
    inquiry_id = save_inquiry(inquiry.model_dump())
    return {
        "success": True,
        "message": "Inquiry successfully recorded. Our Direct Sales & Technical desk will contact you within 24 hours.",
        "inquiryId": inquiry_id,
        "clientName": inquiry.name,
        "company": inquiry.company,
        "productInterest": inquiry.productInterest
    }

@app.get("/api/inquiries", response_model=List[Inquiry], tags=["Inquiries"])
def list_inquiries(limit: int = Query(50, ge=1, le=200)):
    """
    Retrieve logged RFQs for technical sales desk.
    """
    return get_all_inquiries(limit=limit)

@app.get("/api/stats", response_model=SystemStats, tags=["Stats"])
def stats():
    """
    Retrieve aggregated installations and airflow capacity statistics.
    """
    return get_system_stats()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
