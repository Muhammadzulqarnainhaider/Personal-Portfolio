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
    title: "6 months  bootcamp",
    location: "Islamabad, Pakstsn",
    description:
      "I graduated after 6 months of studying. now I am working remotely as a  front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for  2 months 1 job . I am also learning to become full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Islamabad,Pakistan",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript and  Tailwind . I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "This is my first front-End project  . Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Drizzle ORM", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
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
  "Prisma",
  "Redux",
   "Python",
 "Framer Motion",
] as const;
