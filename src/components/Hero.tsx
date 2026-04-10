import "../css/Components.css";
import video from "../assets/me.mp4";
import { IconButton } from "./IconButton";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import bluesky from "../assets/bluesky.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h3>Hello 👋🏼</h3>
        <h1>
          <span className="highlight">I'm</span>
          <span className="highlight">Kie</span>
          <span className="highlight"> Croft.</span>
        </h1>
        <h2>Front End Developer</h2>
        <h3>Based in North England</h3>
        <div className="links">
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
      </div>
      <div className="hero-right">
        <video width="500" height="500" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="shadow"></div>
      </div>
    </div>
  );
};
