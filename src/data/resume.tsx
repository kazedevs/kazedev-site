import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raj",
  url: "https://kazedev.site",
  initials: "R",
  description: "19 and doing my best",
  summary: `
    <p>I'm 19</p>
    <p>I love to code and break things</p>
    <p>Social Network is my favorite movie</p>
    <p>and Sometimes I read books</p>
  `,
  avatarUrl: "/pfp.jpeg",
  skills: ["React", "Next.js", "Typescript", "Node/Express.js", "Go", "Java", "Python"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kazed4v@proton.me",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kazedevs",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kazedevs",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:kazed4v@proton.me",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "The Unemployment Line",
      title: "Professional Couch Potato",
      period: "Present - Until Further Notice",
      icon: "😴",
      description: "currently building srible and unemployed",
      skills: ["Patience", "Resilience", "Professional Napping"],
      badges: [],
      location: "My Couch",
      start: "Present",
      end: "Until Further Notice",
    },
  ],
  education: [
    {
      school: "Assam Down Town University",
      degree: "Computer Science & Engineering",
      start: "2024",
      end: "2028 (Ongoing)",
      logoUrl: "https://collegexpad.com/wp-content/uploads/2023/11/Assam-Down-Town-University.png",
      href: "https://adtu.in",
    },
  ],
  building: [
    {
      title: "Srible",
      description: "A minimal blogging platform for developers and writers",
      icon: "/srible_logo.png",
      status: "In Development",
      technologies: ["React", "Rust", "Material UI"],
      href: "https://srible.com",
    },
  ],
} as const;
