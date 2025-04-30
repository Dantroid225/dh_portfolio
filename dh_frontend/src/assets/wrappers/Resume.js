import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: rgb(238, 238, 225);
  padding: 2rem;

  .resume-header {
    text-align: center;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: rgb(43, 35, 8); /* Consistent heading color */
    }

    p {
      font-size: 1rem;
      color: rgb(153, 126, 35); /* Consistent paragraph color */
    }
  }

  .resume-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .resume-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #ffffff;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: rgb(153, 126, 35); /* Consistent heading color */
      border-bottom: 2px solid #e8e3e3;
      padding-bottom: 0.5rem;
    }

    h4 {
      font-size: 1.2rem;
      font-weight: bold;
      color: rgb(44, 37, 13); /* Consistent heading color */
    }

    p {
      font-size: 1rem;
      color: rgb(153, 126, 35); /* Consistent paragraph color */
    }

    ul {
      margin: 0;
      padding-left: 1.5rem;
      list-style-type: disc;

      li {
        color: rgb(92, 76, 22); /* Consistent list item color */
        font-size: 1rem;
        line-height: 1.5;
      }
    }
  }

  @media (max-width: 768px) {
    .resume-content {
      grid-template-columns: 1fr;
    }
  }
`;

export default Wrapper;
