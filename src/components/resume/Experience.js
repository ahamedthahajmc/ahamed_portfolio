import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Developer"
            subTitle="Capminds Technologies PVT LTD - (MAR 2022 - OCT 2024)"
            result="Chennai"
            des="Built EHR and RPM interfaces using React.js, integrating with PHP and MySQL backends. I optimized performance with Redux and efficient queries while collaborating on timely, high-quality feature delivery."
            heiSize="h-2/3"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2025 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Lead"
            subTitle="Hani Technology Solutions - (JAN 2025 - Present)"
            result="Chennai"
            des="An Institute Management System (IMS) is a software application designed to streamline and automate administrative tasks within educational institutions, such as schools, colleges, and universities."
            heiSize="h-2/3"
          />
        </div>
      </div>
      <div>
        {/* <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2025 - Present</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div> */}
        {/* <div className="mt-14 w-full h-[450px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Lead"
            subTitle="Capminds Technologies PVT LTD - (MAR 2022 - OCT 2024)"
            result="Chennai"
            des="An Institute Management System (IMS) is a software application designed to streamline and automate administrative tasks within educational institutions, such as schools, colleges, and universities."
            heiSize="h-1/2"
          />
          <ResumeCard
            title="React Developer"
            subTitle="Capminds Technologies PVT LTD - (MAR 2022 - OCT 2024)"
            result="Chennai"
            des="Built EHR and RPM interfaces using React.js, integrating with PHP and MySQL backends. I optimized performance with Redux and efficient queries while collaborating on timely, high-quality feature delivery."
            heiSize="h-2/3"
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;
