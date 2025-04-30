import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4rem 2rem;
  background-color: rgb(238, 229, 205);

  .section-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
  }

  .section-description {
    text-align: center;
    font-size: 1rem;
    color: #555;
    margin-bottom: 2rem;
  }

  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      font-size: 1rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 0.5rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: #f9f9f9;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #007bff;
        outline: none;
      }
    }
  }

  .submit-btn {
    display: inline-block;
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default Wrapper;
