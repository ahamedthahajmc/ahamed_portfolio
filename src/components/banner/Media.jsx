import React from 'react'
import { FaLinkedinIn, FaReact,  } from "react-icons/fa";
import { SiGithub,SiGmail,SiRedux, SiPhp, SiMysql, SiLaravel } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          🔗 Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://github.com/mihirc0111" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="mailto:ahamedthahajmc@gmail.com">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/ahamed-thaha-6a53a715b" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          💻 Tools & Technologies
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" title='React Js'>
              <FaReact />
            </span>
            <span className="bannerIcon" title='Redux'>
              <SiRedux />
            </span>
            <span className="bannerIcon" title='Php'>
              <SiPhp />
            </span>
            <span className="bannerIcon" title='MySql'>
              <SiMysql size={30} />
            </span>
            <span className="bannerIcon" title='Laravel'>
              <SiLaravel size={20} />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media