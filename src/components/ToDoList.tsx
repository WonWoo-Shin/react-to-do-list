import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, IToDo, toDosAtom, userCategoriesAtom } from "../atom";

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
    <li>
      <span>{text}</span>
      {category !== Categories.toDo && (
        <button onClick={() => changeCate(Categories.toDo)}>TO DO</button>
      )}
      {category !== Categories.doing && (
        <button onClick={() => changeCate(Categories.doing)}>DOING</button>
      )}
      {category !== Categories.done && (
        <button onClick={() => changeCate(Categories.doing)}>DONE</button>
      )}
      {userCategories.length > 0 &&
        userCategories.map(
          (userCategory) =>
            category !== userCategory.text && (
              <button
                key={userCategory.id}
                onClick={() => changeCate(userCategory.text as Categories)}
              >
                {userCategory.text}
              </button>
            )
        )}
    </li>
  );
}

export default ToDoList;
