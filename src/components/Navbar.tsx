import "../css/Components.css";
import { IconButton } from "./IconButton";
import { Link } from "./Link";
import light from "../assets/light.png";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <Link text="Projects" href="https://github.com" />
        <Link text="About Me" href="https://github.com" />
        <Link text="Contact" href="https://github.com" />
      </div>
      <IconButton source={light} />
    </div>
  );
};
