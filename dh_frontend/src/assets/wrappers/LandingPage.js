import styled from "styled-components";

const Wrapper = styled.section`
  .projects {
    padding: 60px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    align-items: center;
    gap: 2rem; /* Space between columns */
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-img {
    width: 100%;
    max-width: 400px; /* Limit the image size */
    border-radius: var(--border-radius); /* Add rounded corners */
    box-shadow: var(--shadow-2); /* Add a subtle shadow */
  }

  @media (max-width: 992px) {
    .projects {
      grid-template-columns: 1fr; /* Stack columns on smaller screens */
    }
    .image-container {
      order: -1; /* Move the image to the first column */
    }
    .main-img {
      margin-bottom: 2rem; /* Add spacing below the image */
    }
  }
`;

export default Wrapper;
