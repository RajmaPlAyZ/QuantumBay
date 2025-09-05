import { About, Auth, Blog, Contact, Domain, Gallery, Home, Login, Newsletter, Person, Services, Signup, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Quantum",
  lastName: "Bay",
  name: `Quantum Bay`,
  role: "Cloud & Hosting Solutions",
  avatar: "/images/avatar.jpg",
  email: "hello@quantumbay.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Stay updated with our latest cloud solutions and hosting innovations</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/quantumbay",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/quantumbay/",
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/quantumbay",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} - Cloud & Hosting Solutions`,
  description: `Premium cloud hosting, VPS, and domain services for businesses worldwide`,
  headline: <>Your trusted partner in cloud infrastructure</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Quantum Bay</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured service
        </Text>
      </Row>
    ),
    href: "/services",
  },
  subline: (
    <>
      We're Quantum Bay, a leading cloud hosting provider specializing in cloud infrastructure, 
      where we deliver reliable cloud infrastructure and hosting solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About Us",
  title: `About – ${person.name}`,
  description: `Learn about ${person.name}, our mission, and our cloud hosting expertise`,
  image: "/images/avatar.jpg",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/quantumbay",
  },
  intro: {
    display: true,
    title: "Our Mission",
    description: (
      <>
        Quantum Bay is a premier cloud hosting provider dedicated to delivering reliable, 
        scalable, and secure hosting solutions. We empower businesses with cutting-edge 
        cloud infrastructure, VPS hosting, and domain services to ensure their digital success.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Our Journey",
    experiences: [
      {
        company: "Quantum Bay",
        timeframe: "2020 - Present",
        role: "Cloud Infrastructure",
        achievements: [
          <>
            Deployed and managed over 10,000+ servers across multiple data centers, 
            serving clients worldwide with 99.9% uptime guarantee.
          </>,
          <>
            Established strategic partnerships with major cloud providers and developed 
            proprietary hosting solutions for enterprise clients.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Quantum Bay Cloud Infrastructure",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "CloudTech Solutions",
        timeframe: "2018 - 2020",
        role: "Infrastructure Management",
        achievements: [
          <>
            Managed cloud infrastructure for Fortune 500 companies, achieving 40% cost 
            reduction while improving performance.
          </>,
          <>
            Built and maintained scalable hosting environments supporting millions of 
            users with zero downtime.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Our Expertise",
    institutions: [
      {
        name: "Cloud Infrastructure Institute",
        description: <>Specialized in cloud architecture and distributed systems.</>,
      },
      {
        name: "Data Center Management Lab",
        description: <>Focused on server optimization and network infrastructure.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Our Technology Stack",
    skills: [
      {
        title: "Cloud Infrastructure",
        description: (
          <>Expertise in AWS, Azure, Google Cloud, and custom cloud solutions for scalable hosting.</>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Cloud infrastructure",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Data center",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Server Management",
        description: (
          <>Advanced server administration, VPS deployment, and performance optimization.</>
        ),
        tags: [
          {
            name: "Linux",
            icon: "linux",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Server management",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const services: Services = {
  path: "/services",
  label: "Services",
  title: "Our Services – Quantum Bay",
  description: "Comprehensive cloud hosting and infrastructure solutions",
  image: "/images/og/home.jpg",
  headline: <>Complete cloud hosting solutions</>,
  subline: (
    <>
      We provide a full range of cloud hosting services designed to meet your business needs 
      with reliability, performance, and security at the core.
    </>
  ),
  serviceList: [
    {
      category: "Hosting",
      title: "VPS Hosting",
      description: "High-performance virtual private servers with full root access and customizable configurations.",
      features: [
        "SSD-powered storage for lightning-fast performance",
        "Full root access and custom OS installation",
        "DDoS protection and security monitoring",
        "99.9% uptime guarantee",
        "24/7 technical support"
      ],
      cta: {
        text: "Get Started",
        href: "/contact"
      }
    },
    {
      category: "Cloud",
      title: "Cloud Servers",
      description: "Scalable cloud infrastructure with instant deployment and flexible resource allocation.",
      features: [
        "Instant server deployment",
        "Auto-scaling capabilities",
        "Load balancing and failover",
        "Multiple data center locations",
        "Pay-as-you-go pricing"
      ],
      cta: {
        text: "Deploy Now",
        href: "/contact"
      }
    },
    {
      category: "Domains",
      title: "Domain Services",
      description: "Complete domain management including registration, transfer, and DNS services.",
      features: [
        "Domain registration and transfer",
        "DNS management and configuration",
        "SSL certificates and security",
        "Email hosting setup",
        "Domain privacy protection"
      ],
      cta: {
        text: "Register Domain",
        href: "/contact"
      }
    },
    {
      category: "Infrastructure",
      title: "Managed Hosting",
      description: "Fully managed hosting solutions with automated maintenance and monitoring.",
      features: [
        "Automated backups and updates",
        "Performance monitoring and optimization",
        "Security scanning and protection",
        "Technical support and maintenance",
        "Custom control panel access"
      ],
      cta: {
        text: "Learn More",
        href: "/contact"
      }
    }
  ]
};

const domain: Domain = {
  path: "/domain",
  label: "Domain",
  title: "Domain Services – Quantum Bay",
  description: "Complete domain management and hosting solutions",
  image: "/images/og/home.jpg",
  headline: <>Professional domain services</>,
  subline: (
    <>
      From domain registration to complete hosting solutions, we provide everything you need 
      to establish and maintain your online presence.
    </>
  ),
  sections: [
    {
      title: "Domain Registration",
      description: "Secure and reliable domain registration services with competitive pricing.",
      points: [
        "All major TLDs (.com, .net, .org, etc.)",
        "Bulk domain registration",
        "Domain transfer services",
        "Domain privacy protection",
        "Auto-renewal options"
      ]
    },
    {
      title: "DNS Management",
      description: "Advanced DNS management with global CDN and performance optimization.",
      points: [
        "Advanced DNS configuration",
        "Global CDN integration",
        "DNS failover and redundancy",
        "Real-time DNS monitoring",
        "API access for automation"
      ]
    },
    {
      title: "Email Hosting",
      description: "Professional email hosting with advanced features and security.",
      points: [
        "Business email accounts",
        "Email security and spam protection",
        "Webmail access",
        "Email forwarding and aliases",
        "Calendar and contact sync"
      ]
    },
    {
      title: "SSL Certificates",
      description: "Free and premium SSL certificates to secure your websites and applications.",
      points: [
        "Free Let's Encrypt SSL",
        "Premium SSL certificates",
        "Wildcard SSL support",
        "SSL monitoring and alerts",
        "Automatic SSL renewal"
      ]
    }
  ],
  cta: {
    title: "Ready to get started?",
    text: "Register your domain today",
    href: "/contact"
  }
};

const contact: Contact = {
  path: "/contact",
  label: "Contact Us",
  title: "Contact – Quantum Bay",
  description: "Get in touch with our team for cloud hosting and domain services",
  image: "/images/og/home.jpg",
  headline: <>Let's build your cloud infrastructure</>,
  subline: (
    <>
      Ready to deploy your applications or register your domain? 
      Our team is here to help you choose the perfect hosting solution.
    </>
  ),
  contactMethods: [
    {
      title: "Email Support",
      description: "Send us a message and we'll get back to you within 2 hours.",
      details: [
        "General inquiries: hello@quantumbay.com",
        "Technical support: support@quantumbay.com",
        "Sales inquiries: sales@quantumbay.com"
      ],
      cta: {
        text: "Send Email",
        href: "mailto:hello@quantumbay.com"
      }
    },
    {
      title: "Schedule a Consultation",
      description: "Book a technical consultation to discuss your hosting requirements.",
      details: [
        "30-minute technical review",
        "Infrastructure planning",
        "Migration assistance"
      ],
      cta: {
        text: "Book Call",
        href: "https://cal.com/quantumbay"
      }
    },
    {
      title: "Data Center Locations",
      description: "Visit our data centers and see our infrastructure in action.",
      details: [
        "New York Data Center",
        "Los Angeles Data Center", 
        "London Data Center",
        "Singapore Data Center"
      ]
    }
  ],
  form: {
    title: "Get a custom quote",
    description: "Tell us about your hosting needs and we'll provide a personalized solution.",
    action: "/api/contact"
  }
};

const login: Login = {
  path: "/login",
  label: "Login",
  title: "Login – Quantum Bay",
  description: "Sign in to your hosting dashboard",
  image: "/images/og/home.jpg",
  headline: <>Welcome back to Quantum Bay</>,
  subline: (
    <>
      Sign in to access your hosting dashboard and manage your cloud services.
    </>
  )
};

const signup: Signup = {
  path: "/signup",
  label: "Sign Up",
  title: "Sign Up – Quantum Bay",
  description: "Create your account and start managing your hosting services",
  image: "/images/og/home.jpg",
  headline: <>Join Quantum Bay</>,
  subline: (
    <>
      Create your account and start managing your cloud hosting services today.
    </>
  )
};

const auth: Auth = {
  path: "/auth",
  label: "Login/Sign Up",
  title: "Client Portal – Quantum Bay",
  description: "Access your hosting dashboard and manage your services",
  image: "/images/og/home.jpg",
  headline: <>Welcome to your hosting dashboard</>,
  subline: (
    <>
      Sign in to manage your servers, domains, and hosting services from our secure client portal.
    </>
  )
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Cloud Insights and Updates...",
  description: `Read the latest insights from ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Infrastructure Projects – ${person.name}`,
  description: `Cloud infrastructure and hosting solutions by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Infrastructure showcase – ${person.name}`,
  description: `A showcase of our data centers and infrastructure`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Data center infrastructure",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Server racks",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Network infrastructure",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Cloud infrastructure",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Server management",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Data center operations",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Network monitoring",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Infrastructure management",
      orientation: "vertical",
    },
  ],
};

export { about, auth, blog, contact, domain, gallery, home, login, newsletter, person, services, signup, social, work };

