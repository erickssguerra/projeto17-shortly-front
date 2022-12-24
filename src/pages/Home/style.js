import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  svg {
    color: #568259;
    margin-left: 10px;
    font-size: 30px;
    cursor: default;
  }
`;

export const List = styled.ol`
  width: 400px;
  max-width: 90%;
  margin-bottom: 20px;
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 40px;
  background: #96e6b3;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 24px 0px #78b1591f;
`;

export const Position = styled.div`
  width: 5%;
  font-size: 16px;
  font-weight: 700;
  border-right: 1px solid #ccfccb;
`;

export const Name = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5px;
  font-size: 16px;
  font-weight: 700;
  height: 20px;
  border-right: 1px solid #ccfccb;
`;

export const Links = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  height: 20px;
  border-right: 1px solid #ccfccb;
`;

export const Views = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  height: 20px;
`;
