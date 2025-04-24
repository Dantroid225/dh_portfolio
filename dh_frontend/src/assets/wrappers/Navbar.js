import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  position: sticky; /* Make the navbar sticky */
  top: 20px; /* Stick to the top of the viewport */
  z-index: 1000; /* Ensure it stays above other elements */
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between logo and links */
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.9);
  margin: 20px auto 0 auto; /* Center the navbar */
  width: 90%; /* Restrict the width to fit within margins */
  max-width: 1200px; /* Optional: Limit the maximum width */
  border-radius: var(--border-radius); /* Add rounded corners if desired */

  .nav-center {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .logo-text {
    display: block;
    font-size: 1.5rem;
    color: var(--white); /* White text */
    padding-left: 1rem; /* Add padding to the left */
  }

  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }

  .btn-container {
    display: flex;
    align-items: center;
  }

  .nav-links {
    display: flex;
    padding: 0.5rem 1rem; /* Add padding around the links */
    flex-direction: row; /* Keep links in a horizontal row */
    gap: 1.5rem; /* Space between links */
  }

  .nav-link {
    display: flex;
    flex-direction: column; /* Stack icon and text vertically */
    align-items: center; /* Center icon and text horizontally */
    text-decoration: none;
    color: var(--white); /* White text */
    font-size: 1rem;
    transition: color 0.3s ease-in-out;
  }

  .nav-link:hover {
    color: var(--primary-500); /* Highlight color on hover */
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    margin: 20px auto 0 auto; /* Ensure it stays centered */
    width: 90%; /* Keep the width within margins */
    max-width: 1200px; /* Optional: Limit the maximum width */
    .nav-center {
      width: 100%;
    }
    .logo {
      display: none;
    }
  }
`;

export default Wrapper;
