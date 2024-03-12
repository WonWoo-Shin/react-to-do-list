import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IToDo, Progresses } from "../../atom";
import { ProgressItem } from "../../styles/BottomSectionStyle";
import {
  faCheck,
  faEllipsis,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";

function Progress({ progress }: { progress: IToDo["progress"] }) {
  switch (progress) {
    case Progresses.toDo:
      return (
        <ProgressItem $color="#FFA080">
          <FontAwesomeIcon icon={faExclamation} />
        </ProgressItem>
      );
    case Progresses.doing:
      return (
        <ProgressItem $color="#FFDF80">
          <FontAwesomeIcon icon={faEllipsis} />
        </ProgressItem>
      );
    default:
      return (
        <ProgressItem $color="#A5D46A">
          <FontAwesomeIcon icon={faCheck} />
        </ProgressItem>
      );
  }
}

export default Progress;
