import styled from "styled-components";

export const ToDoWrap = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ToDoListStyle = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ToDoItem = styled.li`
  width: 530px;
  height: 90px;
  padding: 15px 0;
  border-bottom: 2px solid #ebe9e9;
  display: flex;
  align-items: center;
  position: relative;
`;

export const CateCircle = styled.div`
  width: 40px;
  height: 40px;
  color: #60b5ea;
  font-size: 17px;
  margin-right: 15px;
  border-radius: 50%;
  border: 2px solid #ebe9e9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoText = styled.div`
  width: calc(100% - 55px);
  height: 100%;
  font-size: 17px;
  color: #606060;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Place = styled.span`
  color: #b5b5b5;
  font-size: 15px;
`;

export const RightSide = styled.div`
  height: inherit;
  display: flex;
`;

export const Time = styled.span`
  color: #b8b8b8;
  font-size: 15px;
  text-align: center;
`;

export const ProgressItem = styled.div<{ $color: string }>`
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border-radius: 50%;
  border: 2px solid ${(props) => props.$color};
  color: ${(props) => props.$color};
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionArea = styled.div`
  margin-left: 20px;
  width: 20px;
  height: 100%;
  color: #b8b8b8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: #606060;
  }
  svg {
    width: 100%;
  }
`;

export const PopupStyle = styled.ul`
  padding: 10px 0;
  background-color: #ffffff;
  border-radius: 8px;
  position: absolute;
  bottom: -90px;
  right: 0;
  box-shadow: 0px 2px 6px rgba(60, 64, 67, 0.16);
  z-index: 1;
  li {
    cursor: pointer;
    :hover {
      background-color: #ecedef;
    }
  }
  div {
    padding: 6px 12px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      width: 20px;
      margin-right: 8px;
    }
    span {
      font-size: 12px;
    }
  }
  li:last-child {
    color: #f9b5c2;
    margin-top: 10px;
    border-top: 2px solid #ebe9e9;
  }
`;
