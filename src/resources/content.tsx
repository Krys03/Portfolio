import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Chris",
  lastName: "Lopez",
  name: `Chris Lopez`,
  role: "Dev Ops Cloud ",
  avatar: "/images/me1.jpeg",
  email: "chrislpz.ch@gmail.com",
  location: "Europe/Zurich", // Expecting theIANA time zone identifier , e.g., 'Europe/Vienna'
  languages: ["English", "French","Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Krys03",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/chris-lopez-709620194/",
  },
   //{
     //name: "Email",
     // icon: "email",
     //link: `mailto:${person.email}`,
   //},
];

const home: Home = {
  path: "/about",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>From code to cloud
  <br /> I make systems faster, safer, and smarter. 
  </>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
       
        <Text marginRight="4" onBackground="brand-medium">
          Latest works
        </Text>
       
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>I’m Chris, passionate about DevOps, automation, and cloud engineering
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Aspiring DevOps engineer with a strong foundation in Cloud systems and Full Stack development (Java, Spring Boot, PostgreSQL, React, Angular). Hands-on experience with Salesforce Cloud solutions and proficient in Azure and AWS. My background blends technical troubleshooting with customer-facing problem solving, bridging business needs with scalable solutions. Currently focused on cloud infrastructure, automation, CI/CD, and security to deliver efficient, reliable systems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Salesforce",
        timeframe: "Sep 2024 - Jul 2025",
        role: "Technical Account Manager",
        achievements: [
          <>
            Diagnosed and resolved Salesforce Cloud incidents including API (REST/SOAP) errors, query performance issues, and service outages.
          </>,
          <>
            Troubleshot and escalated integration failures between Salesforce and third-party ERP/CRM systems via middleware (e.g., MuleSoft).
          </>,
           <>
           Resolved authentication and access issues such as SSO/OAuth2 failures and conflicts with roles/profiles in Salesforce Identity.
         </>,
          <>
         Coordinated with product and engineering teams to address critical bugs affecting sandbox/production environments and followed up on fixes during Salesforce release cycles.
        </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
           //{
             //src: "/images/projects/project-01/cover-01.jpg",
             //alt: "Once UI Project",
             //width: 16,
             //height: 9,
           //},
        ],
      },
      {
        company: "Quantcast",
        timeframe: "Feb 2024 - Aug 2024",
        role: "Technical Account Manager",
        achievements: [
          <>
           Resolved programmatic delivery incidents such as blocked campaigns, RTB bidding errors, and sudden drops in impressions.
          </>,
          <>
            Supported tracking integrations by troubleshooting tags/pixels, fixing misattributed conversions, and correcting broken data feeds.
          </>,
           <>
           Investigated audience targeting issues including missing segments and unsynced data between Quantcast and agency DMPs/CRMs (Dentsu, Havas, Publicis).
         </>,
          <>
          Escalated critical platform bugs such as UI crashes, delays in campaign activation, and API-related failures with DSPs/Ad Servers.
        </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Openclassrooms",
        description: <>Master 1 Bac +4 : Software Developer Full-Stack</>,
      },
      {
        name: "Montpellier University III",
        description: <>Diploma of Access to University Studies – Humanities, French national degree equivalent to the High School Diploma/A-levels in Humanities</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Cloud System Administration",
        description: (
          <>Hands-on experience with AWS and Microsoft Azure, covering application deployment, cloud infrastructure management, networking, and security. Familiar with key services such as EC2, S3, App Services, and resource monitoring/optimization.</>
        ),
        tags: [
          {
            name: " Aws",
            icon: "aws",
          },
          {
            name: " Azure",
            icon: "azure",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/illust/aws1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/illust/ma2.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Network and Security",
        description: (
          <>Solid foundation in network protocols (DNS, TCP/IP, HTTPS) and Identity & Access Management (IAM) — including SSO, RBAC, OAuth2/JWT. Experienced with SSL/TLS & certificate management, secure system integration, troubleshooting, and incident handling to ensure reliable access and data protection.</>
        ),
        tags: [
          {
            name: "IAM",
            icon: "badge",
          },
          {
            name: "JWT",
            icon: "jwt",
          },
          {
            name: "Oauth",
            icon: "oa",
          }, 
          {
            name: "Apache",
            icon: "apa",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/illust/netsec.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Java Full-Stack",
        description: (
          <>Proficient in Java Full Stack development with experience in Spring Boot for backend APIs, Maven for build automation, and PostgreSQL for database management. Skilled in building responsive front-end applications using React and Angular, delivering scalable and user-friendly solutions.</>
        ),
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Springboot",
            icon: "sb",
          },
          {
            name: "Postgre Sql",
            icon: "postg",
          },
          {
            name: "React",
            icon: "react",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/illust/sr1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },    
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
