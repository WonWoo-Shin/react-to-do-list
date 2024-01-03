import styled from "styled-components";

export const LeftSide = styled.div`
  padding: 20px 30px;
  background-color: rgba(0, 0, 0, 0.15);
  div:first-child {
    margin-bottom: 25px;
  }
  div:nth-child(2) {
    font-size: 40px;
    line-height: 120%;
    margin-bottom: 40px;
  }
  div:last-child {
    color: #6e799a;
    font-weight: 600;
  }
`;

export const RightSide = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  position: relative;
`;

export const ToDosCount = styled.div`
  justify-self: cente;
  span {
    display: block;
    text-align: end;
  }
  span:first-child {
    font-size: 35px;
    margin-bottom: 5px;
  }
`;

export const DonePercent = styled.div`
  position: absolute;
  bottom: 30px;
  right: 20px;
  font-size: 17px;
  color: #6e799a;
  font-weight: 600;
`;
