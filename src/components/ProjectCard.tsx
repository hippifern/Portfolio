import { gsap } from "gsap";
import "../css/Components.css";
import light from "../assets/light.png";
import github from "../assets/github.png";
import { IconButton } from "./IconButton";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import type { TargetAndTransition, VariantLabels } from "motion";

type ProjectCardProps = {
    imgSrc: string;
    projectName: string;
    projectLinkLive: string;
    projectLinkGh: string;
    projectType: string;
    projectTech: string[];
    initialAnimState: boolean | TargetAndTransition | VariantLabels | undefined;
    finalAnimState: TargetAndTransition | VariantLabels | undefined;
};

export const ProjectCard = ({
    imgSrc,
    projectName,
    projectLinkLive,
    projectLinkGh,
    projectType,
    projectTech,
    initialAnimState,
    finalAnimState,
}: ProjectCardProps) => {
    const nameRef = useRef(null);

    useEffect(() => {
        gsap.set(nameRef.current, { opacity: 0, y: -10 });
    }, []);

    const onMouseEnter = () => {
        if (!nameRef.current) return;
        gsap.to(nameRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.2,
        });
    };

    const onMouseLeave = () => {
        if (!nameRef.current) return;
        gsap.to(nameRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.2,
        });
    };

    return (
        <motion.div
            initial={initialAnimState}
            whileInView={finalAnimState}
            viewport={{ once: true, amount: 0.5 }}
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
                    <p>{projectType}</p>
                </div>
                <div className="icon-bar">
                    <div className="tech-icons">
                        {projectTech.map((tech) => {
                            return <img src={tech} alt="" />;
                        })}
                    </div>
                    <div className="icons">
                        {projectLinkLive !== "" ? (
                            <IconButton
                                source={light}
                                linkable={true}
                                link={projectLinkLive}
                                large={false}
                            />
                        ) : (
                            <></>
                        )}
                        {projectLinkGh !== "" ? (
                            <IconButton
                                source={github}
                                linkable={true}
                                link={projectLinkGh}
                                large={false}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
