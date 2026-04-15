import { ProjectCard } from "./ProjectCard";
import imgOne from "../assets/one.png";
import imgTwo from "../assets/two.png";
import imgFour from "../assets/four.png";
import thejump from "../assets/thejump.png";
import codeByte from "../assets/CodeBytes.png";
import lbtype from "../assets/lbtype.png";
import roasters from "../assets/roasters.png";
import twinkl from "../assets/twinkl.png";
import npm from "../assets/npm.png";

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
          projectType={"Personal Project"}
        />
        <ProjectCard
          imgSrc={codeByte}
          projectName={"Code Bytes"}
          projectLinkLive={"https://github.com/hippifern/CodeSnippetManager"}
          projectLinkGh={"https://github.com/hippifern/CodeSnippetManager"}
          projectType={"Personal Project"}
        />
        <ProjectCard
          imgSrc={imgTwo}
          projectName={"Needle & Tide"}
          projectLinkLive={"https://needleandtide.com"}
          projectLinkGh={
            "https://github.com/hippifern/shopify-ecommerce-development"
          }
          projectType={"Agency Work"}
        />
        <ProjectCard
          imgSrc={imgFour}
          projectName={"Sandfold Studio"}
          projectLinkLive={"https://sandfoldstudio.com"}
          projectLinkGh={
            "https://github.com/hippifern/brand-website-redevelopment"
          }
          projectType={"Agency Work"}
        />
        <ProjectCard
          imgSrc={thejump}
          projectName={"The Jump Digital"}
          projectLinkLive={"https://jumpdigital.framer.website/"}
          projectLinkGh={""}
          projectType={"Agency Work"}
        />
        <ProjectCard
          imgSrc={twinkl}
          projectName={"Twinkl Edu."}
          projectLinkLive={"https://twinkl.co.uk"}
          projectLinkGh={""}
          projectType={"In-house Work"}
        />
        <ProjectCard
          imgSrc={roasters}
          projectName={"Redem. Roasters"}
          projectLinkLive={"https://redemptionroasters.com/"}
          projectLinkGh={""}
          projectType={"Subcontractor"}
        />
        <ProjectCard
          imgSrc={lbtype}
          projectName={"LB Type"}
          projectLinkLive={"https://lbtype.com"}
          projectLinkGh={""}
          projectType={"Subcontractor"}
        />
        <ProjectCard
          imgSrc={npm}
          projectName={"NPM Package"}
          projectLinkLive={"https://www.npmjs.com/package/craft-react-app"}
          projectLinkGh={""}
          projectType={"Personal Project"}
        />
      </div>
    </div>
  );
};
