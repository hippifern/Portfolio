import "../css/Components.css";
import { IconButton } from "./IconButton";
import chatgpt from "../assets/chatgpt.png";
import css from "../assets/css.png";
import gh from "../assets/github (1).png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import shopify from "../assets/shopify.png";
import vue from "../assets/vuejs.png";
import nodejs from "../assets/nodejs.png";
import nextjs from "../assets/nextjs.png";
import analytics from "../assets/analytics.png";
import { useScreenSize } from "../hooks/useScreenSize.tsx";

export const About = () => {
  const screenSize = useScreenSize();

  return (
    <div id="about" className="about-container">
      <h3>About Me.</h3>

      <div className="content-grid">
        <div className="text-block-large">
          <p>
            Mixing clean code with good vibes and great design for the last 5
            years.
          </p>
        </div>
        <div className="text-block">
          <p>
            At{" "}
            <a target="_blank" href="https://www.sandfoldstudio.com">
              {" "}
              <span className="inline-link">
                <span className="highlight-link">Sandfold Studio,</span>
              </span>
            </a>{" "}
            I design and develop scalable front-end systems, craft
            high-performing e-commerce builds, and bring ideas to life through
            smooth animations and thoughtful UI. I work closely with clients to
            turn briefs into polished, production-ready experiences that don’t
            just look good—they perform.
          </p>
          <p>
            At{" "}
            <a target="_blank" href="https://www.twinkl.co.uk">
              <span className="inline-link">
                <span className="highlight-link">Twinkl</span>
              </span>{" "}
            </a>
            and in contract roles, I created landing pages and handled Technical
            SEO that actually moved the needle. Improving Core Web Vitals,
            doubling conversion rates and reducing drop-off. Aside my contract
            work, I volunteered as a tutor/mentor for an online coding bootcamp,
            providing reviews and support for students.
          </p>
        </div>
        <div className="text-block">
          <h4>My Tech Stack</h4>
          <div className="links">
            <IconButton
              source={react}
              linkable={false}
              link="https://github.com"
              large={screenSize === "xs" ? false : true}
            />
            <IconButton
              source={js}
              linkable={false}
              link="ttps://github.com"
              large={screenSize === "xs" ? false : true}
            />
            <IconButton
              source={css}
              linkable={false}
              link="ttps://github.com"
              large={screenSize === "xs" ? false : true}
            />
            <IconButton
              source={vue}
              linkable={false}
              link="https://github.com"
              large={screenSize === "xs" ? false : true}
            />
            <IconButton
              source={shopify}
              linkable={false}
              link="ttps://github.com"
              large={screenSize === "xs" ? false : true}
            />
            <IconButton
              source={gh}
              linkable={false}
              link="ttps://github.com"
              large={screenSize === "xs" ? false : true}
            />
            <IconButton
              source={chatgpt}
              linkable={false}
              link="https://github.com"
              large={screenSize === "xs" ? false : true}
            />
            <IconButton
              source={nodejs}
              linkable={false}
              link="ttps://github.com"
              large={screenSize === "xs" ? false : true}
            />
            <IconButton
              source={nextjs}
              linkable={false}
              link="ttps://github.com"
              large={screenSize === "xs" ? false : true}
            />
            <IconButton
              source={analytics}
              linkable={false}
              link="https://github.com"
              large={screenSize === "xs" ? false : true}
            />
          </div>
        </div>
        <div className="text-block">
          <h4>Certifications</h4>
          <p>
            BA Digital Media & Communication -{" "}
            <span className="bold">Edge Hill University</span>
          </p>
          <p>
            Post Graduate Degree In Education -{" "}
            <span className="bold">University of Cumbria</span>
          </p>
          <p>
            Front End Development Nanodegree -{" "}
            <span className="bold">Udacity</span>
          </p>
          <p>
            UX Design Professional Certification -{" "}
            <span className="bold">Google</span>
          </p>
        </div>
      </div>
    </div>
  );
};
