import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Projects";
import { BigSidebar, SmallSidebar, Navbar } from "../components";

const ProjectsContext = createContext();

const ProjectsLayout = () => {
  //temp
  const user = { name: "john" }; // Replace with actual user authentication logic
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    // Perform logout logic here
    console.log("User logged out");
  };

  return (
    <ProjectsContext.Provider
      value={{
        user,
        showSidebar,

        toggleSidebar,

        logoutUser,
      }}
    >
      <div>
        <Navbar />
      </div>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => useContext(ProjectsContext);

export default ProjectsLayout;
