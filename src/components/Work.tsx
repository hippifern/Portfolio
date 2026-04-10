import { ProjectCard } from "./ProjectCard";
import imgOne from "../assets/one.png";
import imgTwo from "../assets/two.png";
import imgThree from "../assets/three.png";
import imgFour from "../assets/four.png";

export const Work = () => {
  return (
    <div className="work-container" id="work">
      <h3>Work.</h3>
      <div className="project-cards-container">
        <ProjectCard
          imgSrc={imgOne}
          projectType={"React Web App"}
          projectName={"DungeonAI.exe"}
          projectLinkLive={"https://hippifern.github.io/AI-Adventure-Game/"}
          projectLinkGh={"https://github.com/hippifern/AI-Adventure-Game"}
        />
        <ProjectCard
          imgSrc={imgTwo}
          projectType={"Shopify Store"}
          projectName={"Needle & Tide"}
          projectLinkLive={"https://needleandtide.com"}
          projectLinkGh={
            "https://github.com/hippifern/shopify-ecommerce-development"
          }
        />
        <ProjectCard
          imgSrc={imgThree}
          projectType={"Framer Website"}
          projectName={"The Jump Digital"}
          projectLinkLive={""}
          projectLinkGh={""}
        />
        <ProjectCard
          imgSrc={imgFour}
          projectType={"Framer Website"}
          projectName={"Sandfold Studio"}
          projectLinkLive={"https://sandfoldstudio.com"}
          projectLinkGh={
            "https://github.com/hippifern/brand-website-redevelopment"
          }
        />
      </div>
    </div>
  );
};
