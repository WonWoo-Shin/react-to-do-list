import { useRecoilValue } from "recoil";
import ToDoList from "./ToDoList/ToDoList";
import { Categories, toDosAtom, toDosSelector } from "../atom";
import {
  Container,
  ToDoListBox,
  BottomSection,
  Filter,
} from "../styles/HomeStyle";
import TopSection from "./TopSection";
import { ToDoWrap, ToDoListStyle, Title } from "../styles/BottomSectionStyle";
import AddToDoBox from "./AddToDo/AddToDoBox";
import ChangeCate from "./ChangeCate";
import ChangeProgress from "./ChangeProgress";

function Home() {
  const toDos = useRecoilValue(toDosSelector);
  console.log(toDos);
  return (
    <Container>
      <ToDoListBox>
        <TopSection />
        <BottomSection>
          <Filter>
            <ChangeCate />
            <ChangeProgress />
          </Filter>
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
