import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #ffffff; /* White background */

  padding: 2rem;

  .hobbies-header {
    text-align: center;
    margin-bottom: 2rem;

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

  .hobbies-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    gap: 2rem; /* Space between cards */
  }

  .card {
    background-color: rgb(245, 245, 245); /* Light gray background for cards */
    border: 1px solid rgb(220, 220, 220); /* Subtle border */
    border-radius: 8px; /* Rounded corners */
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: rgb(34, 34, 34); /* Dark font color */
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      color: rgb(68, 68, 68); /* Slightly lighter dark font color */
    }

    &:hover {
      transform: translateY(-5px); /* Lift the card slightly on hover */
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
    }
  }

  @media (max-width: 992px) {
    .hobbies-grid {
      grid-template-columns: 1fr 1fr; /* 2 columns for medium screens */
    }
  }

  @media (max-width: 768px) {
    .hobbies-grid {
      grid-template-columns: 1fr; /* 1 column for small screens */
    }
  }
`;

export default Wrapper;
