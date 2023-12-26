import { useRecoilValue } from "recoil";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import { toDosSelector } from "../atom";
import SelectCate from "./SelectCate";

function Home() {
  const toDos = useRecoilValue(toDosSelector);
  console.log(toDos);
  return (
    <>
      <h1>To Do</h1>
      <hr />
      <AddToDo />
      <SelectCate />
      <ul>
        {toDos.map((toDo) => (
          <ToDoList key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

export default Home;
