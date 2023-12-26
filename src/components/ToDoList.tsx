import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, selectAtom, toDosAtom } from "../atom";

function ToDoList({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDosAtom);
  const select = useRecoilValue(selectAtom);
  const changeCate = (newCate: IToDo["category"]) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo: IToDo = { id, text, category: newCate };
      const newToDos = [...oldToDos];
      newToDos.splice(targetIndex, 1, newToDo);
      return newToDos;
    });
  };
  return (
    <li>
      {select !== category || (
        <>
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
        </>
      )}
    </li>
  );
}

export default ToDoList;
