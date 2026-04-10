import { ProjectCard } from "./ProjectCard";

export const Work = () => {
  return (
    <div className="work-container">
      <h3>Work.</h3>
      <div className="project-cards-container">
        <ProjectCard
          imgSrc={
            "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          projectType={"React Web App"}
          projectName={"DungeonAI.exe"}
          projectLink={""}
        />
        <ProjectCard
          imgSrc={
            "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          projectType={"Shopify Store"}
          projectName={"Needle & Tide"}
          projectLink={""}
        />
        <ProjectCard
          imgSrc={
            "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          projectType={"Framer Website"}
          projectName={"The Jump Digital"}
          projectLink={""}
        />
        <ProjectCard
          imgSrc={
            "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          projectType={"Framer Website"}
          projectName={"Sandfold Studio"}
          projectLink={""}
        />
      </div>
    </div>
  );
};
