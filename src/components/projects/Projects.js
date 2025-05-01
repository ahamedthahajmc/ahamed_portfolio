import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Vozo EHR Platform"
          des=" Simplify your practice management with comprehensive cloud-based digital health tech solutions - experience a smooth workflow."
          src={projectOne}
          websiteLink="https://mumbai.vozo.xyz"

        />
        <ProjectsCard
          title="Vozo EHR - Patient Portal"
          des=" Vozo patient portal software makes it fast & easy for your patients to access health records, schedule appointments, pay bills. secure messaging system."
          src={projectTwo}
          websiteLink="https://mumbai.clientx.me/"
        />
        <ProjectsCard
          title="My Store"
          des=" My Store E-Commerce Site is act like Sales and Inventory System. It's in developement."
          src={projectThree}
          // githubLink="https://github.com/mihirc0111/Secrets"
          // websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
        />
      </div>
    </section>
  );
}

export default Projects