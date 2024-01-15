import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Box = styled.div`
  width: 600px;
  height: 800px;
  box-shadow: rgba(157, 180, 208, 0.5) 0px 8px 20px;
`;

export const ToDoListBox = styled(Box)`
  display: grid;
  grid-template-rows: 1fr 2fr;
`;

export const TopSectionStyle = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  background-image: url("/backImg.jpg");
  background-size: 100% 100%;
  color: #fafbfe;
`;

export const BottomSection = styled.div`
  background-color: #ffffff;
  padding: 30px;
`;

export const AddToDoBoxStyle = styled(Box)`
  background-color: #46529d;
  padding: 30px;
`;
