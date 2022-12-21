import logo from "./logo.png";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyle>
      <img src={logo} alt="logo" />
    </LogoStyle>
  );
}

const LogoStyle = styled.div`
  display: flex;
  img {
    width: 30px;
  }
`;
