import styled from "styled-components";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #e8e3e3; /* Consistent text color */
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .nav-link {
    font-size: 1rem;
    font-weight: 500;
    color: #e8e3e3; /* Consistent text color */
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  .nav-link:hover {
    color: #4a90e2; /* Highlight color */
  }

  .toggle-btn {
    display: none;
    font-size: 1.5rem;
    color: #e8e3e3;
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      padding: 1rem 0;
    }

    .nav-links.show {
      display: flex;
    }

    .toggle-btn {
      display: block;
    }
  }
`;

export default Wrapper;
