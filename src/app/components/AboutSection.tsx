"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA : any= [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Figma,Photoshop</li>
        <li>Html,Css,Sass</li>
        <li>Bootstrap,TailwindCss</li>
        <li>JavaScript,TypeScript</li>
        <li>Jquery,VueJs,ReactJs,NextJs,Angular</li>
        <li>NodeJs</li>
        <li>ExpressJs,NestJs,TypeOrm</li>
        <li>MongoDB,Postgresql</li>
        <li>Linux,Git,Postman,Firebase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Diploma in computing Abe endorsed</li>
        <li>B.E.H.S (7) Taungoo</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Intern Frontend Developer - 3 months at Systematic Business Solution <br />
        
        <h6>Golden Oriented Co,Ltd Product Catalouge</h6>
        <h6>Vivo Group of Companies Business Portfolio</h6>
        <h6>Myanant B2B Services</h6>
        </li>

        <li className=" mt-5">Junior Frontend Developer - 3 months at Systematic Business Solution<br />
        
        
        <h6>Pwar Pwar Gyi Ebike Product Catalouge</h6>
        <h6>Columbus Air ticket selling,Travel & Tour Agency</h6></li>
        <h6>KaKaCar Business Catalouge & Ecommerce</h6>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id : any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="img" src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-md">
            I am a full stack developer passionate in designing & developing
            interactive and responsive fully functional web applications. I have hand-on experience
            working with JavaScript, TypeScript, Angular, Node.js, Express, MongoDB,
            TypeOrm, HTML, CSS, Sass, Bootstrap, Jquery, Tailwind and Git. I am learning AWS cloud service to develop cloud native applications.
            I am a quick learner and always enthusiastic to expand my knowledge, skill set & networks. I am a team player and
            I am excited to work with like-minded people to create amazing applications with cutting-edge technologies.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t : any) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
