import "../css/Components.css";
import { IconButton } from "./IconButton";
import { Button } from "./Button";
import top from "../assets/top.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import bluesky from "../assets/bluesky.png";
import video from "../assets/me.mp4";

export const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-left">
        <video width="500" height="500" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="shadow"></div>
      </div>
      <div className="lets-work">
        <div className="content">
          <h4>Let's Work.</h4>
          <p>Together we can code something that makes people smile.</p>
          <p className="email">kiecroft@gmail.com</p>
        </div>
        <div className="socials">
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
          <IconButton
            source={bluesky}
            linkable={true}
            link="https://bsky.app/"
            large={false}
          />
        </div>
        <div className="cv">
          <a href="/kie-croft-cv.pdf" download>
            <Button text="Download CV" />
          </a>
        </div>
        <div className="go-back">
          <IconButton source={top} linkable={true} link="#home" large={false} />
        </div>
      </div>
    </div>
  );
};
