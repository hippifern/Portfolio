import "../css/Components.css";
import { IconButton } from "./IconButton";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import bluesky from "../assets/bluesky.png";

export const About = () => {
  return (
    <div className="about-container">
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
            At Sandfold Studio, I design and develop scalable front-end systems,
            craft high-performing e-commerce builds, and bring ideas to life
            through smooth animations and thoughtful UI. I work closely with
            clients to turn briefs into polished, production-ready experiences
            that don’t just look good—they perform.
          </p>
          <p>
            At Twinkl and in contract roles, I created landing pages and
            campaigns that actually moved the needle. From improving Core Web
            Vitals to doubling conversion rates and reducing drop-off, I focused
            on the details that make a real impact. Whether it’s refining user
            journeys, optimising performance, or tweaking layouts, I’m all about
            building websites that feel as good as they function.
          </p>
        </div>
        <div className="text-block">
          <h4>My Tech Stack</h4>
          <div className="links">
            <IconButton
              source={github}
              linkable={true}
              link="https://github.com"
              large={true}
            />
            <IconButton
              source={linkedin}
              linkable={true}
              link="ttps://github.com"
              large={true}
            />
            <IconButton
              source={bluesky}
              linkable={true}
              link="ttps://github.com"
              large={true}
            />
            <IconButton
              source={github}
              linkable={true}
              link="https://github.com"
              large={true}
            />
            <IconButton
              source={linkedin}
              linkable={true}
              link="ttps://github.com"
              large={true}
            />
            <IconButton
              source={bluesky}
              linkable={true}
              link="ttps://github.com"
              large={true}
            />
          </div>
        </div>
        <div className="text-block">
          <h4>Certifications</h4>
          <p>BA Digital Media & Communication - Edge Hill University</p>
          <p>Post Graduate Degree In Education - University of Cumbria</p>
          <p>Front End Development Nanodegree - Udacity</p>
          <p>UX Design Professional Certification - Google</p>
        </div>
      </div>
    </div>
  );
};
