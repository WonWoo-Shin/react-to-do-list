import { useRecoilValue } from "recoil";
import ToDoList from "./ToDoList";
import { toDosSelector } from "../atom";
import { Container, ToDoListBox, BottomSection } from "../styles/HomeStyle";
import TopSection from "./TopSection";
import { ToDoWrap, ToDoListStyle, Title } from "../styles/BottomSectionStyle";
import AddToDoBox from "./AddToDo/AddToDoBox";

function Home() {
  const toDos = useRecoilValue(toDosSelector);
  return (
    <Container>
      <ToDoListBox>
        <TopSection />
        <BottomSection>
          <Title>INBOX</Title>
          <ToDoWrap>
            {toDos.length === 0 ? (
              <div>Add your to do</div>
            ) : (
              <ToDoListStyle>
                {toDos.map((toDo) => (
                  <ToDoList key={toDo.id} {...toDo} />
                ))}
              </ToDoListStyle>
            )}
          </ToDoWrap>
        </BottomSection>
      </ToDoListBox>
      <AddToDoBox />
    </Container>
  );
}

export default Home;
