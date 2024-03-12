import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PopupStyle } from "../../styles/BottomSectionStyle";
import {
  faCheck,
  faEllipsis,
  faExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { IToDo, Progresses, toDosAtom } from "../../atom";
import { useSetRecoilState } from "recoil";

function OptionPopUp({ id, text, place, progress, category }: IToDo) {
  const setToDos = useSetRecoilState(toDosAtom);
  const ChangeProgress = (newProgress: IToDo["progress"]) => {
    setToDos((oldToDos) => {
      const targettIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targettIndex),
        { id, text, place, progress: newProgress, category },
        ...oldToDos.slice(targettIndex + 1),
      ];
    });
  };
  const deleteToDo = () => {
    setToDos((oldToDos) => oldToDos.filter((toDo) => toDo.id !== id));
  };
  return (
    <PopupStyle>
      {progress === Progresses.toDo || (
        <li onClick={() => ChangeProgress(Progresses.toDo)}>
          <div>
            <FontAwesomeIcon icon={faExclamation} />
            <span>TO DO</span>
          </div>
        </li>
      )}
      {progress === Progresses.doing || (
        <li onClick={() => ChangeProgress(Progresses.doing)}>
          <div>
            <FontAwesomeIcon icon={faEllipsis} />
            <span>DOING</span>
          </div>
        </li>
      )}
      {progress === Progresses.done || (
        <li onClick={() => ChangeProgress(Progresses.done)}>
          <div>
            <FontAwesomeIcon icon={faCheck} />
            <span>DONE</span>
          </div>
        </li>
      )}
      <li onClick={deleteToDo}>
        <div>
          <FontAwesomeIcon icon={faXmark} />
          <span>DELETE</span>
        </div>
      </li>
    </PopupStyle>
  );
}

export default OptionPopUp;
