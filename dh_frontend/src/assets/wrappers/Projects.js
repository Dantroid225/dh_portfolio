import styled from "styled-components";

const Wrapper = styled.section`
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two even columns */
    gap: 2rem;
  }

  .projects-page {
    margin: 0;
    padding: 2rem 0;
  }

  @media (max-width: 768px) {
    .projects {
      grid-template-columns: 1fr; /* Stack columns on smaller screens */
    }
  }
`;

export default Wrapper;
