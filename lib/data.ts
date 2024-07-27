import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "6-Month Bootcamp Graduate",
    location: "Islamabad, Pakistan",
    description:
      "Completed an intensive 6-month bootcamp in Islamabad, where I honed my skills in front-end and back-end development. I'm committed to becoming a top 1% developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer Intern",
    location: "Remote",
    description:
      "Gained practical experience as a front-end developer for 2 months. Focused on enhancing my skills in HTML, CSS, JavaScript, and Tailwind CSS while starting to explore full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Islamabad, Pakistan",
    description:
      "Currently working as a full-stack developer freelancer, specializing in React, Next.js, TypeScript, and Tailwind CSS. Open to full-time opportunities to further advance my career.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
  {
    title: "BS Computer Science Student",
    location: "Virtual University of Pakistan",
    description:
      "Enrolled in the BS Computer Science program, starting in September 2024. Aiming to gain comprehensive knowledge in computer science and explore AI applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2028",
  },
  {
    title: "Volunteer AI Researcher",
    location: "Remote",
    description:
      "Participating in volunteer research projects to gain hands-on experience in AI. Focused on solving complex problems and contributing to innovative solutions.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
  {
    title: "Part-Time Worker",
    location: "Taxila, Pakistan",
    description:
      "Balancing studies with part-time work to support myself financially without relying on my parents. This experience has taught me time management, responsibility, and the ability to juggle multiple tasks efficiently.",
    icon: React.createElement(CgWorkAlt),
    date: "Ongoing",
  },
  {
    title: "Competitive Programmer",
    location: "Remote",
    description:
      "Actively practicing and improving problem-solving skills through competitive programming challenges. Enhancing my proficiency in algorithms and data structures.",
    icon: React.createElement(CgWorkAlt),
    date: "Ongoing",
  },
  {
    title: "Beginner in DevOps and Back-End Technologies",
    location: "Remote",
    description:
      "Learning and applying beginner skills in Docker, FastAPI, Kubernetes, PostgreSQL, and Kafka. Focused on developing a strong foundation in DevOps and back-end technologies to support full-stack development.",
    icon: React.createElement(FaReact),
    date: "Ongoing",
  },
] as const;



export const projectsData = [
  {
    title: "First project",
    description:
      "This is my first front-End project.",
    tags: ["React", "Next.js", "Drizzle ORM", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "UX/UI",
    description:
      "Currently i am learning UX/UI designing .",
    tags: ["UX Design" , "UI Design" , "Figma"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Currency Converter",
    description:
      "Here is one simple Typescript currency converter Project.",
    tags: ["Typescript" ,"javascript"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",

  "Git",
  "Tailwind",
 "Framer Motion",
 "Python",
 "Docker",
 "Kubernetes" , 
 "Fastapi"
] as const;
