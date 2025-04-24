import { useProjectsContext } from "../pages/ProjectsLayout";
import links from "../utils/links"; // Import the links array from utils
import { NavLink } from "react-router-dom"; // Import NavLink for navigation

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar } = useProjectsContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
