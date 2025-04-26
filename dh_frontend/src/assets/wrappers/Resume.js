import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: rgb(238, 238, 225);
  padding: 2rem;
  margin-bottom: 4rem;
  padding-bottom: 4rem;

  .resume-header {
    text-align: left;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: rgb(34, 34, 34); /* Dark font color */
    }

    p {
      font-size: 1rem;
      color: rgb(34, 34, 34); /* Dark font color */
    }
  }

  .resume-content {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two even columns */
    gap: 2rem;
  }

  .resume-column {
    display: flex;
    flex-direction: column;
    gap: 1rem; /* Space between items */
    background-color: rgb(198, 217, 198); /* Light gray background */
    border: 1px solid rgb(220, 220, 220); /* Subtle border */

    border-radius: 8px; /* Rounded corners */
    padding: 1.5rem; /* Padding inside the column */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Subtle shadow */
    padding-bottom: 2rem;

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: rgb(34, 34, 34); /* Dark font color */
      border-bottom: 2px solid rgb(34, 34, 34); /* Underline for section titles */

      padding-bottom: 0.5rem;
    }

    h4 {
      font-size: 1.2rem;
      font-weight: bold;
      color: rgb(53, 48, 36); /* Dark font color */
    }

    p {
      font-size: 1rem;
      color: rgb(34, 34, 34); /* Dark font color */
    }

    ul {
      margin: 0;
      padding-left: 1.5rem;
      list-style-type: disc;

      li {
        color: rgb(34, 34, 34); /* Dark font color */
        font-size: 1rem;
        line-height: 1.5;
      }
    }
  }

  .job-item {
    display: flex;
    padding: 1rem;
    background-color: rgb(233, 227, 218);
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    .resume-content {
      grid-template-columns: 1fr; /* Stack columns on smaller screens */
    }
  }
`;

export default Wrapper;
