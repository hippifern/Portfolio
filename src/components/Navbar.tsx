import "../css/Components.css";
import { Link } from "./Link";

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
    <div id="home" className="nav-container">
      <div className="navbar">
        {navbar.map((item: { text: string; link: string }) => {
          return <Link text={item.text} href={item.link} />;
        })}
      </div>
    </div>
  );
};
