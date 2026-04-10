import { useState } from "react";
import "../css/Components.css";
import light from "../assets/light.png";
import { IconButton } from "./IconButton";

type ProjectCardProps = {
  imgSrc: string;
  projectType: string;
  projectName: string;
  projectLink: string;
};

export const ProjectCard = ({
  imgSrc,
  projectType,
  projectName,
  projectLink,
}: ProjectCardProps) => {
  const [buttonVisible, setButtonVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setButtonVisible(true)}
      onMouseLeave={() => setButtonVisible(false)}
      className="project-card"
    >
      <img src={imgSrc} alt="" />
      <div onClick={() => console.log(projectLink)} className="overlay">
        <div className="notch">
          <div className="cam"></div>
        </div>
        <div className="icon-bar">
          <IconButton
            source={light}
            linkable={true}
            link="https://github.com"
            large={false}
          />
          <IconButton
            source={light}
            linkable={true}
            link="https://github.com"
            large={false}
          />
          <IconButton
            source={light}
            linkable={true}
            link="https://github.com"
            large={false}
          />
        </div>
      </div>
    </div>
  );
};
