export const portfolioData = {
  personal: {
    name: "Tirth Patel",
    title: "Aspiring IT Support | Systems & Network Administrator",
    email: "tirthpatel1617@gmail.com",
    linkedin: "https://www.linkedin.com/in/tirth-patel-7a38501a0",
    location: "Kitchener, Ontario, Canada",
    bio: "An IT graduate with practical experience in constructing infrastructure projects involving Windows Server, Linux, Active Directory, MySQL, Nextcloud, Wazuh, Zabbix, Docker, and Apache Guacamole. Possesses hands-on experience with domain configuration, VPN network connections, security controls, collaboration solutions, remote access, and multi-site server deployments. Enjoys troubleshooting, system administration, and working in both Windows and Linux environments. Proven ability to apply reliability, discipline, and excellent teamwork in fast-paced settings."
  },
  skills: {
    technical: [
      { name: "Windows Server", category: "Infrastructure" },
      { name: "Linux Server", category: "Infrastructure" },
      { name: "Active Directory", category: "Identity Management" },
      { name: "Cloud", category: "Infrastructure" },
      { name: "Troubleshooting", category: "Support" },
      { name: "MySQL", category: "Database" },
      { name: "Nextcloud", category: "Collaboration" },
      { name: "Wazuh", category: "Security" },
      { name: "Zabbix", category: "Monitoring" },
      { name: "Docker", category: "Containerization" },
      { name: "Apache Guacamole", category: "Remote Access" },
      { name: "VPN Configuration", category: "Networking" },
      { name: "Security Control", category: "Security" },
      { name: "Multi-site Deployment", category: "Infrastructure" },
      { name: "Python", category: "Programming" },
      { name: "C Language", category: "Programming" }
    ],
    soft: [
      "Time Management",
      "Critical Precision",
      "Adaptability & Responsiveness",
      "Effective Communication",
      "Teamwork",
      "Reliability",
      "Discipline"
    ]
  },
  experience: [
    {
      id: 1,
      company: "Amazon DSP",
      role: "Warehouse Associate",
      duration: "September 2024 - Present",
      location: "St Thomas, Ontario, Canada",
      description: "Engaged in a fast-paced, highly organized operational setting requiring accuracy, productivity, and teamwork.",
      responsibilities: [
        "Receiving, scanning, and stowing inventory with high accuracy and speed",
        "Observing safety, cleanliness, and quality-control standards",
        "Monitoring product movement using handheld scanners and warehouse software",
        "Liaising with teams to ensure smooth workflow",
        "Training new associates"
      ]
    },
    {
      id: 2,
      company: "Swiss Chalet",
      role: "Line Cook",
      duration: "February 2024 - Present",
      location: "Cambridge, Ontario, Canada",
      description: "Committed to quality and working in a fast-paced environment.",
      responsibilities: [
        "Grilling, frying, and plating dishes to high standards",
        "Working with a team to provide efficient service during busy times",
        "Ensuring safety, hygiene, and speed to enhance dining experience",
        "Monitoring inventory and maintaining a clean workspace"
      ]
    },
    {
      id: 3,
      company: "Viaan Solution LLP",
      role: "Process Associate",
      duration: "October 2023 - March 2024",
      location: "Ahmedabad, Gujarat, India",
      description: "Process management and coordination in a professional IT services environment.",
      responsibilities: []
    },
    {
      id: 4,
      company: "Royal Infotech Solution",
      role: "Student Intern",
      duration: "January 2022 - April 2022",
      location: "Ahmedabad, Gujarat, India",
      description: "Learned Python and C languages and completed small company-assigned projects.",
      responsibilities: [
        "Completed programming projects in Python and C",
        "Collaborated with development team on real-world applications"
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Multi-Site Server Infrastructure",
      description: "Designed and deployed a multi-site server infrastructure connecting multiple locations with VPN tunnels, centralized Active Directory, and remote monitoring systems.",
      technologies: ["Windows Server", "Linux", "VPN", "Active Directory", "Zabbix"],
      highlights: [
        "Configured secure VPN connections between sites",
        "Implemented centralized user authentication",
        "Set up real-time monitoring with Zabbix"
      ]
    },
    {
      id: 2,
      title: "Security Monitoring & SIEM Implementation",
      description: "Implemented Wazuh SIEM solution for security monitoring, log analysis, and threat detection across network infrastructure.",
      technologies: ["Wazuh", "Linux", "Security Control", "Log Analysis"],
      highlights: [
        "Deployed Wazuh agents across infrastructure",
        "Configured custom security rules and alerts",
        "Implemented automated incident response workflows"
      ]
    },
    {
      id: 3,
      title: "Cloud Collaboration Platform",
      description: "Deployed Nextcloud as a private cloud collaboration solution with secure remote access capabilities using Apache Guacamole.",
      technologies: ["Nextcloud", "Apache Guacamole", "Docker", "MySQL"],
      highlights: [
        "Containerized deployment using Docker",
        "Integrated remote desktop access via Guacamole",
        "Configured MySQL backend for data persistence"
      ]
    },
    {
      id: 4,
      title: "Network Monitoring Dashboard",
      description: "Built comprehensive network monitoring solution using Zabbix to track server health, network performance, and system resources.",
      technologies: ["Zabbix", "Linux", "MySQL", "Network Monitoring"],
      highlights: [
        "Configured SNMP monitoring for network devices",
        "Created custom dashboards for real-time visibility",
        "Set up alerting and notification systems"
      ]
    }
  ],
  education: [
    {
      id: 1,
      institution: "Conestoga College",
      degree: "Postgraduate Degree",
      field: "Network and System Administration/Administrator",
      duration: "May 2024 - August 2025",
      location: "Kitchener, Ontario, Canada"
    },
    {
      id: 2,
      institution: "Ganpat University",
      degree: "Bachelor in Computer Application",
      field: "Computer Application",
      duration: "August 2020 - May 2023",
      location: "India"
    },
    {
      id: 3,
      institution: "Tripada High School",
      degree: "Bachelor of Technology - BTech",
      field: "Computer/Information Technology Administration and Management",
      duration: "March 2020 - May 2023",
      location: "India"
    }
  ]
};
