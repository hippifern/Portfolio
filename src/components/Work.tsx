import { ProjectCard } from "./ProjectCard";
import imgOne from "../assets/one.png";
import imgTwo from "../assets/two.png";
import imgFour from "../assets/four.png";
import thejump from "../assets/thejump.png";
import codeByte from "../assets/CodeBytes.png";
import lbtype from "../assets/lbtype.png";
import roasters from "../assets/roasters.png";
import starshipui from "../assets/starship-ui.png";
import inn from "../assets/inn.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import shopify from "../assets/shopify.png";
import framer from "../assets/framer.png";
import firebase from "../assets/firebase.png";
import typescript from "../assets/typescript.png";
import threejs from "../assets/threejs.png";
import motionIcon from "../assets/motion.png";

export const Work = () => {
    return (
        <div className="work-container" id="work">
            <div className="project-cards-container">
                <ProjectCard
                    imgSrc={imgOne}
                    projectName={"DungeonAI.exe"}
                    projectLinkLive={
                        "https://hippifern.github.io/AI-Adventure-Game/"
                    }
                    projectLinkGh={
                        "https://github.com/hippifern/AI-Adventure-Game"
                    }
                    projectType={"Personal Project"}
                    projectTech={[react, js, css]}
                    initialAnimState={{ scale: 0 }}
                    finalAnimState={{
                        scale: 1,
                        transition: { duration: 0.1 },
                    }}
                />
                <ProjectCard
                    imgSrc={inn}
                    projectName={"Erínn Atlas"}
                    projectLinkLive={"https://erinn-atlas.vercel.app/"}
                    projectLinkGh={"https://github.com/hippifern/erinn-atlas"}
                    projectType={"Personal Project"}
                    projectTech={[typescript, react, threejs]}
                    initialAnimState={{ scale: 0 }}
                    finalAnimState={{
                        scale: 1,
                        transition: { duration: 0.1, delay: 0.2 },
                    }}
                />
                <ProjectCard
                    imgSrc={starshipui}
                    projectName={"Starship UI"}
                    projectLinkLive={""}
                    projectLinkGh={"https://github.com/hippifern/starship-ui"}
                    projectType={"Personal Project"}
                    projectTech={[js, motionIcon, react]}
                    initialAnimState={{ scale: 0 }}
                    finalAnimState={{
                        scale: 1,
                        transition: { duration: 0.1, delay: 0.4 },
                    }}
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
                    initialAnimState={{ scale: 0 }}
                    finalAnimState={{
                        scale: 1,
                        transition: { duration: 0.1 },
                    }}
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
                    initialAnimState={{ scale: 0 }}
                    finalAnimState={{
                        scale: 1,
                        transition: { duration: 0.1, delay: 0.2 },
                    }}
                />
                <ProjectCard
                    imgSrc={codeByte}
                    projectName={"Code Bytes"}
                    projectLinkLive={"https://code-bytes-five.vercel.app/"}
                    projectLinkGh={
                        "https://github.com/hippifern/CodeSnippetManager"
                    }
                    projectType={"Personal Project"}
                    projectTech={[react, typescript, css, firebase]}
                    initialAnimState={{ scale: 0 }}
                    finalAnimState={{
                        scale: 1,
                        transition: { duration: 0.1, delay: 0.4 },
                    }}
                />
                <ProjectCard
                    imgSrc={thejump}
                    projectName={"The Jump Digital"}
                    projectLinkLive={"https://jumpdigital.framer.website/"}
                    projectLinkGh={""}
                    projectType={"Agency Work"}
                    projectTech={[framer, react, js]}
                    initialAnimState={{ scale: 0 }}
                    finalAnimState={{
                        scale: 1,
                        transition: { duration: 0.1 },
                    }}
                />
                <ProjectCard
                    imgSrc={roasters}
                    projectName={"Redem. Roasters"}
                    projectLinkLive={"https://redemptionroasters.com/"}
                    projectLinkGh={""}
                    projectType={"Subcontractor"}
                    projectTech={[js, css]}
                    initialAnimState={{ scale: 0 }}
                    finalAnimState={{
                        scale: 1,
                        transition: { duration: 0.1, delay: 0.2 },
                    }}
                />
                <ProjectCard
                    imgSrc={lbtype}
                    projectName={"LB Type"}
                    projectLinkLive={"https://lbtype.com"}
                    projectLinkGh={""}
                    projectType={"Subcontrsactor"}
                    projectTech={[js, css, shopify]}
                    initialAnimState={{ scale: 0 }}
                    finalAnimState={{
                        scale: 1,
                        transition: { duration: 0.1, delay: 0.4 },
                    }}
                />
            </div>
        </div>
    );
};
