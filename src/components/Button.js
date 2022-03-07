import styled from "styled-components";

const Button = styled.button`
  background-color: var(--brand-orange);
  border: none;
  padding: 0.25rem 1rem;
  cursor: pointer;
  font: inherit;
  display: block;
  text-decoration: none;
  margin-right: auto;
  color: black;
  transition: opacity 0.2s ease;

  &:focus,
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
