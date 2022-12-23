import styled from "styled-components";

export const Container = styled.li`
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
  display: flex;
  padding: 5px;
  align-items: center;
  background-color: beige;
  box-shadow: 0px 4px 24px 0px #78b1591f;
  border-radius: 5px;
  transform: all 0.2s;
  :last-child {
    margin-bottom: 20px;
  }
`;

export const BigUrl = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5px;
  font-size: 14px;
  font-weight: 400;
  height: 20px;
  border-right: 1px solid #96E6B3;
  a {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    width: 190px;
    height: 20px;
  }
`;

export const ShortUrl = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  height: 20px;
  border-right: 1px solid #96E6B3;
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

export const Delete = styled.div`
  width: 10%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  background: white;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  svg {
    color: #ee4b2b;
  }
`;
