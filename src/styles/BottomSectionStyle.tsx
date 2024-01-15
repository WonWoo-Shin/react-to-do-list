import styled from "styled-components";

export const Title = styled.div`
  color: #9296a8;
  font-weight: 600;
  font-size: 15px;
`;

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
  padding: 15px 0;
  border-bottom: 2px solid #ebe9e9;
  display: flex;
  align-items: center;
  div {
    display: inline-flex;
  }
`;

export const CateCircle = styled.div`
  width: 65px;
  height: 65px;
  color: #60b5ea;
  font-size: 25px;
  margin-right: 15px;
  border-radius: 50%;
  border: 2px solid #ebe9e9;
  justify-content: center;
  align-items: center;
`;

export const ToDoText = styled.div`
  font-size: 17px;
  color: #606060;
  font-weight: 600;
`;
