import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row; /* Arrange sections in a row */
  gap: 2rem; /* Add space between sections */
  padding: 2rem;

  .section {
    flex: 1; /* Make all sections take equal space */
    border: 1px solid var(--grey-300);
    border-radius: var(--border-radius);
    padding: 1rem;
    background-color: var(--grey-50);
    box-shadow: var(--shadow-1);
  }

  .section-title {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary-500);
  }
`;
export default Wrapper;
