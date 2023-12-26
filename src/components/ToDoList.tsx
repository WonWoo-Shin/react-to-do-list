import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, categoryAtom, toDosAtom } from "../atom";

function ToDoList({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDosAtom);
  const changeCate = (newCate: IToDo["category"]) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo: IToDo = { id, text, category: newCate };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button onClick={() => changeCate("TO_DO")}>TO DO</button>
      )}
      {category !== "DOING" && (
        <button onClick={() => changeCate("DOING")}>DOING</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => changeCate("DONE")}>DONE</button>
      )}
    </li>
  );
}

export default ToDoList;
