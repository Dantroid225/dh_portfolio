import styled from "styled-components";

const Wrapper = styled.section`
  padding: 60px 40px;
  margin: 0rem 1rem
  background-color: rgb(238, 229, 205);

  .section-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    margin-bottom: 2rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: 1fr; /* Single column for rows */
    gap: 2rem;
  }

  .project-row {
 
    display: grid;
    grid-template-columns: 2fr 1fr; /* Two columns: title/description and links */
    align-items: center;
    gap: 1rem;
    background-color: rgb(238, 229, 205);
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .project-title {
    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      color: #555;
    }
  }

  .project-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      font-size: 1rem;
      color: #007bff;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #0056b3;
      }
    }
  }
`;

export default Wrapper;
