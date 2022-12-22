import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  padding: 0 10px;
  background: #ccfccb;
  align-items: center;
  justify-content: center;
  color: #568259;
  display: flex;
`;

export const Inner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 580px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  font-weight: 100;
  font-size: 25px;
  align-items: center;
  * {
    margin-right: 2px;
  }
  svg{
    font-size: 40px;
  }
`;

export const Right = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 18px;
  align-items: center;
  svg {
    font-size: 20px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  * {
    margin-left: 5px;
  }
  .signIn {
    background: none;
    color: #568259;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #568259;
  * {
    margin-right: 5px;
    height: 20px;
  }
`;
