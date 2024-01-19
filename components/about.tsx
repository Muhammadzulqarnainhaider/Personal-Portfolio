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
       I have complete my 12th year of Education{" "}
        <span className="font-medium">F.sc Pre-medical</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">Front-End</span>.{" "}
        <span className="italic">My favorite part of programming</span> is
        making the Ux/Ui designing I <span className="underline">love</span> the
        feeling of finally Making the Front-end. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, and Framer motion
        </span>
        . I am also familiar with TypeScript and Python. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Front-end  position</span> as a Front-End 
        developer.
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
