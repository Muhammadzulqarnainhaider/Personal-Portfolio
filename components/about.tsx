"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After completing my higher secondary education in <span className="font-medium">F.Sc Pre-medical</span>, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and specialized in <span className="font-medium">Front-End Development</span>. <span className="italic">My favorite part of programming</span> is designing user experiences (UX) and user interfaces (UI). I <span className="underline">love</span> the satisfaction of bringing the front-end to life. My core stack includes <span className="font-medium">React, Next.js, and Framer Motion</span>. I am also familiar with TypeScript, Python, Docker, FastAPI, Kubernetes, PostgreSQL, and Kafka. Always eager to learn new technologies, I am currently exploring large language models (LLMs) and how to work with them. I am seeking a <span className="font-medium">Front-End Developer</span> position.
</p>


      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, Lerning new technologies, and playing with my friends . I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning to {" "}
        <span className="font-medium"> Become full-stack developer</span>. I'm also
        learning how to make LLM 
      </p>
    </motion.section>
  );
}
