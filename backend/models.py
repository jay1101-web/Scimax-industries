from typing import Optional, List
from pydantic import BaseModel, Field

class Client(BaseModel):
    id: str
    name: str
    sector: str
    location: str
    equipmentInstalled: str
    capacity: str
    yearInstalled: int
    featured: bool = False
    verified: bool = True

class ClientCreate(BaseModel):
    name: str
    sector: str
    location: str
    equipmentInstalled: str
    capacity: str
    yearInstalled: int
    featured: bool = False

class InquiryCreate(BaseModel):
    name: str
    company: str
    phone: str
    email: str
    industry: Optional[str] = ""
    productInterest: str
    message: Optional[str] = ""

class Inquiry(BaseModel):
    id: int
    name: str
    company: str
    phone: str
    email: str
    industry: Optional[str] = ""
    productInterest: str
    message: Optional[str] = ""
    created_at: str

class SystemStats(BaseModel):
    totalClients: int
    totalInstallations: int
    totalAirflowCfm: str
    statesCovered: int
    complianceStandard: str
