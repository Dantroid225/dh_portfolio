import Wrapper from "../assets/wrappers/SmallSidebar";
import { useProjectsContext } from "../pages/ProjectsLayout";
import Logo from "./Logo";
import { FaTimes } from "react-icons/fa";
//import links from "../utils/links"; // Import the links array from utils
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import NavLinks from "./NavLinks"; // Import NavLinks component

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useProjectsContext(); // Access the context to trigger a re-render if needed
  //console.log(data); // Log the context data for debugging

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
