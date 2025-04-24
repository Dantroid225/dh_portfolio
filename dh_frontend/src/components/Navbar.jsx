import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
//import { useProjectsContext } from "../pages/ProjectsLayout";
import LogoutContainer from "./LogoutContainer";
import NavLinks from "./NavLinks"; // Import NavLinks component
//import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  //const { toggleSidebar } = useProjectsContext();
  // const { user } = useProjectsContext(); // Assuming you have a user context or prop
  return (
    <Wrapper>
      <div className="nav-center">
        {/*}
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        */}
        <div>
          <Logo />
          <h2 className="logo-text">Daniel Hill</h2>
        </div>
        <div>
          <NavLinks />
        </div>
        {/*}
        <div className="btn-container">
          <LogoutContainer />
        </div>
        */}
      </div>
    </Wrapper>
  );
};

export default Navbar;
