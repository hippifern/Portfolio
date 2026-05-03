import "../css/Components.css";
import video from "../assets/me.mp4";
import { IconButton } from "./IconButton";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import { useScreenSize } from "../hooks/useScreenSize.tsx";
import { motion } from "motion/react";

export const Hero = () => {
    const screenSize = useScreenSize();
    return (
        <div className="hero">
            <motion.div className="hero-left">
                <motion.h3 initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    Hello 👋🏼
                </motion.h3>
                <motion.h1
                    initial={{
                        scale: 0,
                    }}
                    animate={{
                        scale: 1,
                    }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="highlight">I'm</span>
                    <span className="highlight">Kie</span>
                    <span className="highlight"> Croft.</span>
                </motion.h1>
                <motion.h2
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Creative Frontend Dev
                </motion.h2>
                <motion.h3
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Based in North England
                </motion.h3>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="links"
                >
                    <IconButton
                        source={github}
                        linkable={true}
                        link="https://github.com/hippifern"
                        large={false}
                    />
                    <IconButton
                        source={linkedin}
                        linkable={true}
                        link="https://www.linkedin.com/in/kie-croft/"
                        large={false}
                    />
                </motion.div>
            </motion.div>
            <div className="hero-right">
                <motion.video
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, ease: "easeInOut" }}
                    width={screenSize === "xs" ? "350" : "500"}
                    height={screenSize === "xs" ? "375" : "500"}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={video} type="video/mp4" />
                </motion.video>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{
                        delay: 0.8,
                        ease: "easeInOut",
                        duration: 0.05,
                    }}
                    className="shadow"
                ></motion.div>
            </div>
        </div>
    );
};
