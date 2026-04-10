import "../css/Components.css";
import { IconButton } from "./IconButton";
import light from "../assets/light.png";
import { Button } from "./Button";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import bluesky from "../assets/bluesky.png";
import video from "../assets/me.mp4";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <video width="500" height="500" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="shadow"></div>
      </div>
      <div className="lets-work">
        <div className="content">
          <h4>Let's Work.</h4>
          <p>
            Whether you’re launching a brand, designing a product, or elevating
            your digital presence, we’re here to bring your vision to life.
          </p>
        </div>
        <div className="socials">
          <IconButton
            source={github}
            linkable={true}
            link="https://github.com"
            large={false}
          />
          <IconButton
            source={linkedin}
            linkable={true}
            link="ttps://github.com"
            large={false}
          />
          <IconButton
            source={bluesky}
            linkable={true}
            link="ttps://github.com"
            large={false}
          />
        </div>
        <div className="cv">
          <Button text="Download CV" />
        </div>
      </div>
    </div>
  );
};
