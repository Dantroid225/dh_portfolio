import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Projects";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
//import links from "../utils/links";
import Resume from "./Resume";
import Profile from "./Profile";
//import { checkDefaultTheme } from "../App";

const ProjectsContext = createContext();

const ProjectsLayout = () => {
  //temp
  const user = { name: "john" }; // Replace with actual user authentication logic
  const [showSidebar, setShowSidebar] = useState(false);
  //const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    //console.log("Sidebar toggled");
  };

  /*
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    //target .body element
    document.body.classList.toggle("dark-theme", newDarkTheme); //dark theme is in index css
    localStorage.setItem("darkTheme", newDarkTheme); // Save the theme preference in local storage
    //console.log("Theme toggled");
  };
  */

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
      <Wrapper>
        <main className="projects">
          <Navbar />
          <div className="projects-page">
            <div>
              <Profile />
            </div>
            <div>
              <Resume />
            </div>

            {/*}
            {links.map((link) => {
              const { text, path } = link;
              return (
                <section key={text} id={path} className="section">
                  <h2 className="section-title">{text}</h2>

                  <Outlet />
                </section>
              );
            })}
              */}
          </div>
        </main>
      </Wrapper>
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => useContext(ProjectsContext);

export default ProjectsLayout;
