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
  title: "Coding Bootcamp Graduate",
  location: "Islamabad, Pakistan",
  description:
    "Completed a 6-month coding bootcamp at Panaversity, learning the fundamentals of web development (HTML, CSS, JavaScript) along with an introduction to React/Next.js and Git.",
  icon: React.createElement(LuGraduationCap),
  date: "2023",
},
{
  title: "German Language Learner (Self-Study)",
  location: "Islamabad, Pakistan",
  description:
    "Learning German independently since January 2025 to pursue a structured Ausbildung in Germany — Goethe-Zertifikat B1 passed, B2 in progress, aiming for C1 by early 2027.",
  icon: React.createElement(LuGraduationCap),
  date: "01/2025 - Present",
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
 "Python", 
 "Fastapi"
] as const;
