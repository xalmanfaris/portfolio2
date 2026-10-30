export const portfolioData = {
  designer: {
    firstName: "SALMAN",
    lastName: "FARIS",
    altFirstName: "DYMAS",
    altLastName: "ALFIN",
    fullName: "Salman Faris",
    role: "UI/UX Designer",
    tagline: "Designing digital products that are clear, usable, and conversion focused.",
    availability: "Available for New Project",
    experienceYears: "9+ years of experience",
    email: "xalmanfarisp@gmail.com",
    location: "Kerala, India & Remote Worldwide",
    cutoutImage: "/salman-cutout-bw.png",
    cutoutColorImage: "/salman-cutout.png",
    avatarImage: "/salman-avatar.jpg",
    socials: [
      { name: "Dribbble", url: "https://dribbble.com", icon: "🏀", key: "dribbble" },
      { name: "Instagram", url: "https://instagram.com/xalmanfaris", icon: "📸", key: "instagram" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "in", key: "linkedin" },
      { name: "Behance", url: "https://behance.net", icon: "Bē", key: "behance" }
    ]
  },

  services: [
    {
      id: "uiux-design",
      name: "UIUX DESIGN",
      tagline: "Wireframing, High-Fidelity UI, Micro-Interactions & Prototyping",
      description: "User research, design systems, mobile app design, and high-converting web applications built with precision and clarity.",
      deliverables: ["User Journey Mapping", "Wireframes & Information Architecture", "High-Fidelity Interfaces (Figma)", "Interactive Prototypes"]
    },
    {
      id: "web-design-dev",
      name: "WEB DESIGN & DEV",
      tagline: "Full-Stack Front-End, Responsive Webflow & Clean Semantic Code",
      description: "Bringing designs to life with lightning-fast performance, bespoke animations, modern React, and clean responsive CSS.",
      deliverables: ["Custom Webflow Builds", "React & Modern JavaScript", "Speed & Lighthouse 95+ Optimization", "Responsive Multi-Breakpoint Testing"]
    },
    {
      id: "branding",
      name: "BRANDING",
      tagline: "Visual Identity, Design Direction, Guidelines & Typography",
      description: "Distinctive logo design, typography pairings, color systems, and brand assets that build trust and leave lasting impressions.",
      deliverables: ["Logo Lockup Suite", "Brand Guidelines & Tokens", "Social & Marketing Collateral", "Typography & Color Palettes"]
    },
    {
      id: "motion-3d",
      name: "MOTION & 3D",
      tagline: "Interactive 3D Assets, Lottie Animations & Micro-Interactions",
      description: "Elevating digital experiences with smooth physics-based motion, hover feedback, scroll-driven storytelling, and 3D product customizers.",
      deliverables: ["Interactive GSAP Animations", "Lottie Micro-Interactions", "3D Product Visualizations", "Video Prototype Walkthroughs"]
    }
  ],

  experience: [
    {
      company: "Kumpin Studio",
      role: "UI/UX & Product Designer",
      period: "Nov 2025 - Now",
      active: true
    },
    {
      company: "Mikan Team",
      role: "Creative Director",
      period: "Aug 2025 - Now",
      active: true
    },
    {
      company: "Microsoft",
      role: "Interaction Designer",
      period: "Jan 2022 - Aug 2025",
      active: false
    },
    {
      company: "Facebook",
      role: "Visual Designer",
      period: "Mar 2019 - Dec 2021",
      active: false
    }
  ],

  projects: [
    {
      id: "bloomcare",
      title: "BloomCare - Mental Health App Landing Page",
      category: "Real Project",
      badge: "REAL PROJECT",
      tags: ["Landing Page", "Kumpin Studio"],
      thumbnail: "/bloomcare-thumb.jpg",
      description: "The all-in-one mental wellness platform featuring AI-guided meditation, habit tracking, and sleep optimization.",
      metrics: {
        metric1: "+180% Sign-up Conversion",
        metric2: "4.9★ App Store Rating",
        metric3: "250K+ Active Users"
      },
      challenge: "Transforming complex biometric tracking and emotional reflection into a calm, approachable interface.",
      solution: "Engineered dark atmospheric visuals with glowing magenta accent lighting and clean micro-interactions."
    },
    {
      id: "fragwater",
      title: "FragWater - Luxury Fragrance Landing Page",
      category: "Real Project",
      badge: "REAL PROJECT",
      tags: ["Landing Page", "Kumpin Studio"],
      thumbnail: "/fragwater-thumb.jpg",
      description: "A timeless e-commerce experience for an artisanal perfume house crafted with sensory luxury and editorial whitespace.",
      metrics: {
        metric1: "+44% Average Order Value",
        metric2: "FWA of the Day",
        metric3: "3m 45s Time on Page"
      },
      challenge: "Evoking scent and olfactory luxury through high-end digital art direction and seamless product discovery.",
      solution: "Created an immersive dark exhibition style with floating detail drawers and custom typography lockups."
    },
    {
      id: "finova-capital",
      title: "Finova - Next-Gen Capital Management",
      category: "Real Project",
      badge: "REAL PROJECT",
      tags: ["Fintech App", "Kumpin Studio"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      description: "Institutional treasury management dashboard built for multi-currency transactions, yield, and real-time cash flow analytics.",
      metrics: {
        metric1: "$1.2B+ Volume Handled",
        metric2: "62% Faster Workflows",
        metric3: "SOC-2 Enterprise Ready"
      },
      challenge: "Replacing clunky legacy financial spreadsheets with an intuitive, keyboard-first dashboard.",
      solution: "Designed modular data widgets with custom dark-mode contrast ratios and instant filtering."
    },
    {
      id: "verve-studio",
      title: "Verve Studio - Architecture Atelier",
      category: "Exploration",
      badge: "EXPLORATION",
      tags: ["Website", "Branding"],
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      description: "Digital exhibition and brand identity for a Scandinavian architecture practice specializing in sustainable stone structures.",
      metrics: {
        metric1: "Awwwards Nominee",
        metric2: "+320% Inquiries",
        metric3: "100/100 Lighthouse"
      },
      challenge: "Conveying the physical tactile textures of raw materials through a high-performance digital browser interface.",
      solution: "Implemented horizontal smooth inertia scrolling and architectural grid typography."
    }
  ]
};
