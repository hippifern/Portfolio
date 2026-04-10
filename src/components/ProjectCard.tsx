import { gsap } from "gsap/gsap-core";
import "../css/Components.css";
import light from "../assets/light.png";
import github from "../assets/github.png";
import { IconButton } from "./IconButton";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

type ProjectCardProps = {
  imgSrc: string;
  projectType: string;
  projectName: string;
  projectLinkLive: string;
  projectLinkGh: string;
};

export const ProjectCard = ({
  imgSrc,
  projectType,
  projectName,
  projectLinkLive,
  projectLinkGh,
}: ProjectCardProps) => {
  const nameRef = useRef(null);

  const onMouseEnter = () => {
    gsap.to(nameRef.current, {
      opacity: 1,
      translateY: "0px",
      duration: 0.2,
    });
  };
  const onMouseLeave = () => {
    gsap.to(nameRef.current, {
      opacity: 0,
      translateY: "-10px",
      duration: 0.2,
    });
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="project-card"
    >
      <img src={imgSrc} alt="" />
      <div className="overlay">
        <div className="notch">
          <div className="cam"></div>
        </div>
        <div ref={nameRef} className="project-card-name">
          <h4>{projectName}</h4>
        </div>
        <div className="icon-bar">
          <IconButton
            source={light}
            linkable={true}
            link={projectLinkLive}
            large={false}
          />
          <IconButton
            source={github}
            linkable={true}
            link={projectLinkGh}
            large={false}
          />
        </div>
      </div>
    </div>
  );
};
