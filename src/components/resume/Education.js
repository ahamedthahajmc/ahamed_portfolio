import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2011 - 2016</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="M.sc. Computer Science"
            subTitle="Jamal Mohamed College (2014 - 2016)"
            // result="7.5 CPI"
            des="A postgraduate degree that delves deeper into the theoretical foundations and practical applications of computer science."
            heiSize="h-1/2"
            resultVisible={false}
          />
          <ResumeCard
            title="B.sc. Computer Science"
            subTitle="Jamal Mohamed College (2011 - 2014)"
            // result="7.5 CPI"
            des="A undergraduate program that provides a strong foundation in the theoretical and practical aspects of computer science, including programming, software development, and algorithms."
            heiSize="h-1/2"
            resultVisible={false}
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">May 2021 - Dec 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Course Completion - MERN Stack Development"
            subTitle="GUVI Geek, IIT Madras. Chennai. (May 2021 - Dec 2021)"
            // result=""
            des="The MERN stack is a full-stack JavaScript technology stack used to build web applications. It comprises MongoDB (a database), Express.js (a backend framework), React (a frontend library), and Node.js (a runtime environment)."
            heiSize="h-1/2"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education