import "../css/Components.css";
import { Link } from "./Link";
import { motion } from "motion/react";

export const Navbar = () => {
    const navbar = [
        {
            text: "My Work",
            link: "#work",
        },
        {
            text: "About Me",
            link: "#about",
        },
        {
            text: "Contact",
            link: "#contact",
        },
    ];
    return (
        <motion.div
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            transition={{ delay: 1.2 }}
            id="home"
            className="nav-container"
        >
            <div className="navbar">
                {navbar.map((item: { text: string; link: string }) => {
                    return <Link text={item.text} href={item.link} />;
                })}
            </div>
        </motion.div>
    );
};
