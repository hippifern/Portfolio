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
          projectName={"DungeonAI.exe"}
          projectLinkLive={"https://hippifern.github.io/AI-Adventure-Game/"}
          projectLinkGh={"https://github.com/hippifern/AI-Adventure-Game"}
        />
        <ProjectCard
          imgSrc={imgTwo}
          projectName={"Needle & Tide"}
          projectLinkLive={"https://needleandtide.com"}
          projectLinkGh={
            "https://github.com/hippifern/shopify-ecommerce-development"
          }
        />
        <ProjectCard
          imgSrc={imgFour}
          projectName={"Sandfold Studio"}
          projectLinkLive={"https://sandfoldstudio.com"}
          projectLinkGh={
            "https://github.com/hippifern/brand-website-redevelopment"
          }
        />
        <ProjectCard
          imgSrc={imgThree}
          projectName={"The Jump Digital"}
          projectLinkLive={"https://jumpdigital.framer.website/"}
          projectLinkGh={""}
        />
      </div>
    </div>
  );
};
