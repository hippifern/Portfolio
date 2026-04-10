import "../css/Components.css";
import { Link } from "./Link";
import { data } from "../data/data.js";

export const Navbar = () => {
  const { navbarData } = data;
  return (
    <div id="home" className="nav-container">
      <div className="navbar">
        {navbarData.map((item) => {
          return <Link text={item.text} href={item.link} />;
        })}
      </div>
    </div>
  );
};
