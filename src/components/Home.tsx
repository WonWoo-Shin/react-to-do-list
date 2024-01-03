import { useRecoilValue } from "recoil";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import { toDosSelector } from "../atom";
import SelectCate from "./SelectCate";
import AddCate from "./AddCate";
import {
  Box,
  Container,
  ToDoListBox,
  BottomSection,
} from "../styles/HomeStyle";
import TopSection from "./TopSection";

function Home() {
  const toDos = useRecoilValue(toDosSelector);
  return (
    <Container>
      <ToDoListBox>
        <TopSection />
        <BottomSection>
          {" "}
          <ul>
            {toDos.map((toDo) => (
              <ToDoList key={toDo.id} {...toDo} />
            ))}
          </ul>
        </BottomSection>
      </ToDoListBox>
      <Box>
        <AddToDo />
        <AddCate />
      </Box>
    </Container>
  );
}

export default Home;
