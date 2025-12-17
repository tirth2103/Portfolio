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
      responsibilities: [
        "Worked as Process Associate for 6 months with main responsibilities in Microsoft Excel, computer skills and filling out insurance forms",
        "Handled add-on urgent forms and audited new employees work",
        "Managed patient data for a dental clinic accurately, including insurance coverage, treatment plans, and financial expenses"
      ]
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
      title: "Enterprise Virtual Infrastructure Implementation (LA & Singapore)",
      duration: "May 2025 - Aug 2025",
      description: "Designed and deployed enterprise-grade virtual infrastructure across worldwide offices in Los Angeles and Singapore with integrated security, monitoring, and collaboration solutions.",
      technologies: ["Windows Server 2019", "Linux Server", "MySQL", "Nextcloud", "Wazuh", "Zabbix", "Gitea", "Redmine", "Microsoft Exchange", "Headwind MDM", "VPN"],
      highlights: [
        "Authorized domain controllers (NetcoreX.local) of two foreign sites and assisted safe VPN connectivity between sites",
        "Introduced enterprise applications: Nextcloud (collaboration), Wazuh (security), Zabbix (monitoring), Gitea (repository), Redmine (ticketing), Exchange (mail), MySQL (database) and Headwind MDM",
        "Authenticated all tools at LDAP/ADDS for centralized identity management",
        "Developed containerized applications using Docker for controlled, portable and rapid provisioning",
        "Ensured security hardening, monitoring alerts and system health verification across both environments"
      ]
    },
    {
      id: 2,
      title: "Apache Guacamole Remote Access Platform via Reverse Proxy & Load Balancing",
      duration: "Jan 2025 - Apr 2025",
      description: "Deployed high-availability Apache Guacamole remote access infrastructure with reverse proxy and load balancing for seamless failover and enterprise-grade remote desktop capabilities.",
      technologies: ["Guacamole 1.5.5", "Ubuntu Server", "Rocky Linux", "MySQL", "Tomcat 9", "Apache 2", "Active Directory", "LDAP", "RDP/VNC"],
      highlights: [
        "Installed Guacamole servers on Ubuntu and CentOS/Rocky Linux with compilation of source, dependencies and guacd service configuration",
        "Configured Tomcat9 to execute Guacamole web client with MySQL backend for persistent authentication",
        "Integrated Guacamole with Active Directory via LDAP for domain authentication and access control",
        "Configured RDP connections to Windows servers and clients with access to sessions across both Guacamole nodes",
        "Implemented Apache reverse proxy and load balancer ensuring failover between Node 1 and Node 2",
        "Reconfigured IP addressing, DNS changes, and reverse-proxy settings for full operational capability with new subnet configuration"
      ]
    },
    {
      id: 3,
      title: "Nextcloud Authentication with Active Directory and LDAP",
      duration: "Jan 2025 - Apr 2025",
      description: "Implemented secure cloud collaboration platform with enterprise authentication, cross-platform support, and centralized identity management.",
      technologies: ["Ubuntu Server", "Red Hat Linux", "Apache", "MariaDB", "OpenLDAP", "Active Directory", "RDP"],
      highlights: [
        "Installed Nextcloud on Ubuntu Server and integrated with Windows Domain Controller",
        "Configured Apache, PHP and MariaDB for secured web access and database control",
        "Added Ubuntu and Windows client machines to AD for cross-platform authentication testing",
        "Enabled Remote Desktop Protocol (RDP) connections for remote administration and verification",
        "Implemented authenticated user access, file sharing and secure data transfer between clients"
      ]
    },
    {
      id: 4,
      title: "Disaster Planning Multi-Domain on a Global Scale",
      duration: "Sep 2024 - Dec 2024",
      description: "Architected and deployed enterprise disaster recovery infrastructure with multi-domain trust relationships, comprehensive backup policies, and global-scale replication.",
      technologies: ["Windows Server 2019", "Active Directory", "DNS", "DHCP", "Group Policy", "File Servers", "Print Servers", "VMware vSphere"],
      highlights: [
        "Deployed dedicated domain (core.local) through Windows Server with ADDS, DNS and static IP configuration",
        "Organized organizational units, groups, users, disk partitions, file shares and mapped drives",
        "Configured conditional forwarders and cross-domain trust associations for multi-site communication",
        "Applied Group Policies (home page protection, LAN access limits) and tested replication throughout domain",
        "Implemented disaster recovery strategy with centralized backup drives and network backup policy"
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
