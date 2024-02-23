import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PopupStyle } from "../../styles/BottomSectionStyle";
import {
  faCheck,
  faEllipsis,
  faExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { IToDo } from "../../atom";

function OptionPopUp({ progress }: { progress: IToDo["progress"] }) {
  return (
    <PopupStyle>
      {progress === "TO DO" || (
        <li>
          <div>
            <FontAwesomeIcon icon={faExclamation} />
            <span>TO DO</span>
          </div>
        </li>
      )}
      {progress === "DOING" || (
        <li>
          <div>
            <FontAwesomeIcon icon={faEllipsis} />
            <span>DOING</span>
          </div>
        </li>
      )}
      {progress === "DONE" || (
        <li>
          <div>
            <FontAwesomeIcon icon={faCheck} />
            <span>DONE</span>
          </div>
        </li>
      )}
      <li>
        <div>
          <FontAwesomeIcon icon={faXmark} />
          <span>DELETE</span>
        </div>
      </li>
    </PopupStyle>
  );
}

export default OptionPopUp;
