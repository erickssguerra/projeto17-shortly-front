import styled from "styled-components";

export const Container = styled.li`
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
  display: flex;
  padding: 5px;
  align-items: center;
  background: beige;
  box-shadow: 0px 4px 24px 0px #78B1591F;
  border-radius: 5px;
  :last-child {
    margin-bottom: 0px;
  }
`;

export const Position = styled.div`
  width: 5%;
  font-size: 16px;
  font-weight: 700;
  border-right: 1px solid #96E6B3;
`;

export const Name = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5px;
  font-size: 16px;
  height: 20px;
  border-right: 1px solid #96E6B3;
`;

export const Links = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
 
  height: 20px;
  border-right: 1px solid #96E6B3;
`;

export const Views = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 20px;
`;

