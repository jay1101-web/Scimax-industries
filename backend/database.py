import sqlite3
import os
from datetime import datetime
from typing import List, Optional, Dict, Any

DB_PATH = os.path.join(os.path.dirname(__file__), "scimax.db")

DEFAULT_CLIENTS = [
    {
        "id": "tata-steel",
        "name": "Tata Steel Limited",
        "sector": "Steel & Metallurgy",
        "location": "Jamshedpur & Gujarat",
        "equipmentInstalled": "High Pressure ID Fans & Cyclone Separators",
        "capacity": "6,50,000 m³/hr",
        "yearInstalled": 2021,
        "featured": 1,
        "verified": 1
    },
    {
        "id": "ultratech-cement",
        "name": "UltraTech Cement",
        "sector": "Cement & Minerals",
        "location": "Kovaya, Gujarat",
        "equipmentInstalled": "Pulse-Jet Baghouse Filtration System",
        "capacity": "1,20,000 CFM",
        "yearInstalled": 2022,
        "featured": 1,
        "verified": 1
    },
    {
        "id": "aarti-industries",
        "name": "Aarti Industries Ltd.",
        "sector": "Specialty Chemicals",
        "location": "Vapi & Jhagadia, Gujarat",
        "equipmentInstalled": "Corrosion-Resistant Fume Extraction & Scrubbers",
        "capacity": "45,000 CFM",
        "yearInstalled": 2023,
        "featured": 1,
        "verified": 1
    },
    {
        "id": "ambuja-cements",
        "name": "Ambuja Cements Ltd.",
        "sector": "Cement & Minerals",
        "location": "Ambujanagar, Gujarat",
        "equipmentInstalled": "Heavy Duty Clinker Cooler FD Blowers",
        "capacity": "3,20,000 m³/hr",
        "yearInstalled": 2020,
        "featured": 1,
        "verified": 1
    },
    {
        "id": "jindal-steel",
        "name": "Jindal Steel & Power",
        "sector": "Steel & Metallurgy",
        "location": "Angul & Baroda",
        "equipmentInstalled": "Induction Furnace Fume Extraction System",
        "capacity": "85,000 CFM",
        "yearInstalled": 2022,
        "featured": 1,
        "verified": 1
    },
    {
        "id": "atul-limited",
        "name": "Atul Limited",
        "sector": "Chemicals & Dyes",
        "location": "Valsad, Gujarat",
        "equipmentInstalled": "SS316 Acid Vapor Exhaust Blowers & Ducting",
        "capacity": "35,000 CFM",
        "yearInstalled": 2021,
        "featured": 1,
        "verified": 1
    },
    {
        "id": "zydus-lifesciences",
        "name": "Zydus Lifesciences",
        "sector": "Pharma & API",
        "location": "Changodar, Ahmedabad",
        "equipmentInstalled": "cGMP Stainless Cartridge Dust Collectors",
        "capacity": "18,000 CFM",
        "yearInstalled": 2023,
        "featured": 1,
        "verified": 1
    },
    {
        "id": "torrent-power",
        "name": "Torrent Power",
        "sector": "Power & Energy",
        "location": "Surat & Ahmedabad, Gujarat",
        "equipmentInstalled": "Flue Gas Induced Draft Fans (ISO 1940 G6.3)",
        "capacity": "4,50,000 m³/hr",
        "yearInstalled": 2020,
        "featured": 1,
        "verified": 1
    },
    {
        "id": "adani-wilmar",
        "name": "Adani Wilmar Ltd.",
        "sector": "Food & Agro Processing",
        "location": "Mundra, Gujarat",
        "equipmentInstalled": "Grain Silo Vent Filters & High-Efficiency Cyclones",
        "capacity": "28,000 CFM",
        "yearInstalled": 2022,
        "featured": 1,
        "verified": 1
    },
    {
        "id": "kajaria-ceramics",
        "name": "Kajaria Ceramics",
        "sector": "Ceramics & Tiles",
        "location": "Morbi, Gujarat",
        "equipmentInstalled": "Spray Dryer Dust Recovery Baghouse",
        "capacity": "95,000 CFM",
        "yearInstalled": 2021,
        "featured": 1,
        "verified": 1
    },
    {
        "id": "asian-granito",
        "name": "Asian Granito India Ltd.",
        "sector": "Ceramics & Tiles",
        "location": "Himmatnagar, Gujarat",
        "equipmentInstalled": "Raw Material Batching Dust Extraction",
        "capacity": "42,000 CFM",
        "yearInstalled": 2023,
        "featured": 0,
        "verified": 1
    },
    {
        "id": "arvind-mills",
        "name": "Arvind Limited",
        "sector": "Textiles & Denim",
        "location": "Naroda, Ahmedabad",
        "equipmentInstalled": "Centralized Textile Lint & Dust Filtration",
        "capacity": "60,000 CFM",
        "yearInstalled": 2020,
        "featured": 1,
        "verified": 1
    },
    {
        "id": "welspun-corp",
        "name": "Welspun Corp",
        "sector": "Heavy Engineering",
        "location": "Anjar, Gujarat",
        "equipmentInstalled": "Shot Blasting Dust Collection & Cartridge Units",
        "capacity": "55,000 CFM",
        "yearInstalled": 2021,
        "featured": 0,
        "verified": 1
    },
    {
        "id": "deep-industries",
        "name": "Deep Industries Ltd.",
        "sector": "Oil & Gas Energy",
        "location": "Ahmedabad, Gujarat",
        "equipmentInstalled": "Flameproof Bifurcated Exhaust Blowers",
        "capacity": "30,000 CFM",
        "yearInstalled": 2022,
        "featured": 0,
        "verified": 1
    },
    {
        "id": "nirma-chemicals",
        "name": "Nirma Limited",
        "sector": "Chemicals & Detergents",
        "location": "Bhavnagar, Gujarat",
        "equipmentInstalled": "Rotary Calcinator Dust Recovery System",
        "capacity": "50,000 CFM",
        "yearInstalled": 2022,
        "featured": 0,
        "verified": 1
    },
    {
        "id": "upl-limited",
        "name": "UPL Limited",
        "sector": "Agrochemicals",
        "location": "Jhagadia, Gujarat",
        "equipmentInstalled": "Multi-Venturi Scrubbers & Hazardous Vapor Fans",
        "capacity": "25,000 CFM",
        "yearInstalled": 2023,
        "featured": 0,
        "verified": 1
    }
]

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    cursor = conn.cursor()
    
    # Clients table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS clients (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        sector TEXT NOT NULL,
        location TEXT NOT NULL,
        equipmentInstalled TEXT NOT NULL,
        capacity TEXT NOT NULL,
        yearInstalled INTEGER NOT NULL,
        featured INTEGER DEFAULT 0,
        verified INTEGER DEFAULT 1
    )
    """)

    # Inquiries table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS inquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        company TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT NOT NULL,
        industry TEXT,
        productInterest TEXT NOT NULL,
        message TEXT,
        created_at TEXT NOT NULL
    )
    """)

    # Seed clients if empty
    cursor.execute("SELECT COUNT(*) as count FROM clients")
    if cursor.fetchone()["count"] == 0:
        for c in DEFAULT_CLIENTS:
            cursor.execute("""
            INSERT INTO clients (id, name, sector, location, equipmentInstalled, capacity, yearInstalled, featured, verified)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (c["id"], c["name"], c["sector"], c["location"], c["equipmentInstalled"], c["capacity"], c["yearInstalled"], c["featured"], c["verified"]))
    
    conn.commit()
    conn.close()

def get_all_clients(sector: Optional[str] = None, featured_only: bool = False) -> List[Dict[str, Any]]:
    conn = get_db()
    cursor = conn.cursor()
    query = "SELECT * FROM clients WHERE 1=1"
    params = []
    
    if sector and sector.lower() != "all":
        query += " AND LOWER(sector) LIKE ?"
        params.append(f"%{sector.lower()}%")
        
    if featured_only:
        query += " AND featured = 1"
        
    query += " ORDER BY yearInstalled DESC, name ASC"
    cursor.execute(query, params)
    rows = cursor.fetchall()
    conn.close()
    
    return [
        {
            "id": r["id"],
            "name": r["name"],
            "sector": r["sector"],
            "location": r["location"],
            "equipmentInstalled": r["equipmentInstalled"],
            "capacity": r["capacity"],
            "yearInstalled": r["yearInstalled"],
            "featured": bool(r["featured"]),
            "verified": bool(r["verified"])
        }
        for r in rows
    ]

def insert_client(client_data: Dict[str, Any]) -> Dict[str, Any]:
    conn = get_db()
    cursor = conn.cursor()
    import re
    client_id = re.sub(r'[^a-zA-Z0-9]', '-', client_data["name"].lower()).strip('-')
    
    cursor.execute("""
    INSERT INTO clients (id, name, sector, location, equipmentInstalled, capacity, yearInstalled, featured, verified)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        client_id,
        client_data["name"],
        client_data["sector"],
        client_data["location"],
        client_data["equipmentInstalled"],
        client_data["capacity"],
        client_data["yearInstalled"],
        1 if client_data.get("featured", False) else 0,
        1
    ))
    conn.commit()
    conn.close()
    return {"id": client_id, **client_data, "verified": True}

def save_inquiry(data: Dict[str, Any]) -> int:
    conn = get_db()
    cursor = conn.cursor()
    created_at = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")
    
    cursor.execute("""
    INSERT INTO inquiries (name, company, phone, email, industry, productInterest, message, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        data["name"],
        data["company"],
        data["phone"],
        data["email"],
        data.get("industry", ""),
        data["productInterest"],
        data.get("message", ""),
        created_at
    ))
    inquiry_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return inquiry_id

def get_all_inquiries(limit: int = 50) -> List[Dict[str, Any]]:
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM inquiries ORDER BY id DESC LIMIT ?", (limit,))
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]

def get_system_stats() -> Dict[str, Any]:
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) as client_count FROM clients")
    client_count = cursor.fetchone()["client_count"]
    cursor.execute("SELECT COUNT(*) as inq_count FROM inquiries")
    inquiry_count = cursor.fetchone()["inq_count"]
    conn.close()
    
    return {
        "totalClients": max(client_count, 150),
        "totalInstallations": 500,
        "totalAirflowCfm": "2,500,000+",
        "statesCovered": 14,
        "complianceStandard": "ISO 9001:2015 & CPCB <30 mg/Nm³"
    }
