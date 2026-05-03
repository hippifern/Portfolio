import "./css/App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Analytics } from "@vercel/analytics/react";
import { motion, useScroll } from "motion/react";

function App() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="app-container">
            <motion.div
                className="scrollbar"
                style={{
                    scaleX: scrollYProgress,
                    originX: 0,
                }}
            />
            <div className="app">
                <Navbar />
                <Hero />
                <Work />
                <About />
                <Contact />
            </div>
            <Analytics />
        </div>
    );
}

export default App;
