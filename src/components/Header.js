import { Link } from "react-router-dom";
import styled from "styled-components";
import IconLogo from "../assets/IconLogo";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  svg {
    max-width: 40px;
    height: auto;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <IconLogo />
      </Link>
    </Wrapper>
  );
}
