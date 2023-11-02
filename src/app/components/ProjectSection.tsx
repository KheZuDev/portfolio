"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Golden Oriented Co.ltd Product Catalouge",
    description: "View only I don't have permission to share the source code although I have because of NDA agreement.But I can show you the source code on interview",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.gocseafood.com",
  },
  {
    id: 2,
    title: "Vivo Group of companies portfolio",
    description: "View only I don't have permission to share the source code although I have because of NDA agreement.But I can show you the source code on interview",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.vivogroupmm.com/",
  },
  {
    id: 3,
    title: "Columbus Air ticket,Travel & Tour Agency",
    description: "View only I don't have permission to share the source code although I have because of NDA agreement.But I can show you the source code on interview",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://coluat.minierp.com.mm/",
  },
  {
    id: 4,
    title: "Car Sell Api development",
    description: "Backend Development with TypeScript,NodeJs,NestJs,TypeOrm,PostgreSql including unit testing & end 2 end testing",
    image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/06/nestjs-api.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/KheZuDev/car-sell-api.git",
    previewUrl: "https://github.com/KheZuDev/car-sell-api.git",
  },
  {
    id: 5,
    title: "Other Projects",
    description: "Other projects including frontend,backend & mobile developments",
    image: "https://www.scnsoft.com/blog-pictures/software-development-outsourcing/plan-your-project-with-your-software-development-methodology.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KheZuDev",
    previewUrl: "https://github.com/KheZuDev",
  },
  {
    id: 6,
    title: "Uiux Designs",
    description: "My Uiux Designs",
    image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=ais",
    tag: ["All", "Web"],
    gitUrl: "https://drive.google.com/drive/folders/1RQkQBGKU9WcJqLIwNKkWh_EjBjOTiG1c?usp=sharing",
    previewUrl: "https://drive.google.com/drive/folders/1RQkQBGKU9WcJqLIwNKkWh_EjBjOTiG1c?usp=sharing",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag : any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
