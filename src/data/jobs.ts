// src/data/jobs.ts
export const jobs = [
  {
    period: "2026 - NOW",
    title: "System Administrator",
    org: "Helpline for CNAM",
    summary: "Handle incident and demands tickets regarding French Health Insurance",
    points: ["Work in progress"],
    stack: ["Work in progress"],
  },
    {
    period: "2021 - 2024",
    title: "PACS Support Engineer (Medical Imaging)",
    org: "TCS for GE Healthcare",
    summary: "Supported PACS / RIS systems deployed accross ~75 Hospitals, backed by critical databases",
  points: [
    "Cut open tickets by over 95%, consistently meeting SLA targets",
    "Resolved 25% of priority cases without escalation within a year",
    "Automated recurring workflows and database health checks (Python, Shell)",
    "Performed around ten core database reindexing operations, normally a Level 3 task, several of them fully autonomously",
    "Contributed to replication, redundancy and failover work",
    "Built an internal knowledge base; trained and quality-reviewed work for new hires",
  ],    
  stack: ["MS SQL Server", "Sybase ASE", "Python", "Shell", "PACS", "OLTP"],
  },
    {
    period: "2020 - 2021",
    title: "Operations Administrator",
    org: "Montpellier Méditerranée Métropole",
    summary: "operation and maintenance of systems and databases for the metropolitan authority (MySQL, PostgreSQL, TCP/IP networking, Linux).",
    points: [
      "Administered MySQL and PostgreSQL databases at scale",
      "Handled the associated TCP/IP network configuration",
      "Automated database and system updates with Ansible, up to a safety threshold requiring human approval, saving several hours of manual work per intervention",
      "Developed an automated version migration script for the system infrastructure",
    ],
    stacks: [
      "Ansible",
      "MySQL",
      "PostgreSQL",
      "TCP/IP",
      "Linux (Red Hat, Debian)",
    ],
  },
      {
    period: "2020 - 2020",
    title: "Python Developer",
    org: "ICube Laboratory",
    summary: "Research on deep learning-assisted renal histopathology using multi-gigapixel medical images (Whole Slide Imaging).",
     points: [
      "Developed a Python library for managing and preprocessing WSI images (up to 40×, 0.253 μm/pixel), feeding a U-Net segmentation pipeline",
      "Library used in a published renal histopathology study covering 4,000+ annotated glomeruli (Computer Methods and Programs in Biomedicine, 2021)",
    ],
    stacks: [
      "Python",
      "Medical image processing",
      "Deep learning preprocessing",
    ],
  },
];