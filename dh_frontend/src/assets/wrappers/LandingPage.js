import styled from "styled-components";

const Wrapper = styled.section`
  .projects {
    padding: 80px 40px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      font-size: 3rem;
      font-weight: bold;
      color: #e8e3e3; /* Consistent heading color */
    }

    p {
      font-size: 1rem;
      color: #e8e3e3; /* Consistent paragraph color */
    }
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-img {
    width: 100%;
    max-width: 400px;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
  }
`;

export default Wrapper;
