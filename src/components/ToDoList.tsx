import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, IToDo, toDosAtom, userCategoriesAtom } from "../atom";
import { CateCircle, ToDoItem, ToDoText } from "../styles/BottomSectionStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function ToDoList({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDosAtom);
  const userCategories = useRecoilValue(userCategoriesAtom);
  const changeCate = (newCate: Categories) => {
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
    <ToDoItem>
      <CateCircle>
        <FontAwesomeIcon icon={faPencil} />
      </CateCircle>
      <ToDoText>{text}</ToDoText>
    </ToDoItem>
  );
}

export default ToDoList;
