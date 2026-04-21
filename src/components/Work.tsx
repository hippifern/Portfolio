import { ProjectCard } from "./ProjectCard";
import imgOne from "../assets/one.png";
import imgTwo from "../assets/two.png";
import imgFour from "../assets/four.png";
import thejump from "../assets/thejump.png";
import codeByte from "../assets/CodeBytes.png";
import lbtype from "../assets/lbtype.png";
import roasters from "../assets/roasters.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import shopify from "../assets/shopify.png";
import framer from "../assets/framer.png";
import firebase from "../assets/firebase.png";
import python from "../assets/python.png";
import nodejs from "../assets/nodejs.png";
import db from "../assets/database.png";
import typescript from "../assets/typescript.png";

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
          projectTech={[react, js, css]}
        />
        <ProjectCard
          imgSrc={imgOne}
          projectName={"NodeJS Backend"}
          projectLinkLive={""}
          projectLinkGh={"https://github.com/hippifern/dungeonAI-Backend"}
          projectType={"Personal Project"}
          projectTech={[typescript, nodejs, db]}
        />
        <ProjectCard
          imgSrc={imgOne}
          projectName={"Analytics API"}
          projectLinkLive={"https://www.npmjs.com/package/craft-react-app"}
          projectLinkGh={""}
          projectType={"Personal Project"}
          projectTech={[js, python, db]}
        />
        <ProjectCard
          imgSrc={imgTwo}
          projectName={"Needle & Tide"}
          projectLinkLive={"https://needleandtide.com"}
          projectLinkGh={
            "https://github.com/hippifern/shopify-ecommerce-development"
          }
          projectType={"Agency Work"}
          projectTech={[shopify, css]}
        />
        <ProjectCard
          imgSrc={imgFour}
          projectName={"Sandfold Studio"}
          projectLinkLive={"https://sandfoldstudio.com"}
          projectLinkGh={
            "https://github.com/hippifern/brand-website-redevelopment"
          }
          projectType={"Agency Work"}
          projectTech={[framer, react, js]}
        />
        <ProjectCard
          imgSrc={codeByte}
          projectName={"Code Bytes"}
          projectLinkLive={"https://code-bytes-five.vercel.app/"}
          projectLinkGh={"https://github.com/hippifern/CodeSnippetManager"}
          projectType={"Personal Project"}
          projectTech={[react, typescript, css, firebase]}
        />
        <ProjectCard
          imgSrc={thejump}
          projectName={"The Jump Digital"}
          projectLinkLive={"https://jumpdigital.framer.website/"}
          projectLinkGh={""}
          projectType={"Agency Work"}
          projectTech={[framer, react, js]}
        />
        <ProjectCard
          imgSrc={roasters}
          projectName={"Redem. Roasters"}
          projectLinkLive={"https://redemptionroasters.com/"}
          projectLinkGh={""}
          projectType={"Subcontractor"}
          projectTech={[js, css]}
        />
        <ProjectCard
          imgSrc={lbtype}
          projectName={"LB Type"}
          projectLinkLive={"https://lbtype.com"}
          projectLinkGh={""}
          projectType={"Subcontractor"}
          projectTech={[js, css, shopify]}
        />
      </div>
    </div>
  );
};
