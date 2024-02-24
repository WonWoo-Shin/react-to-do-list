import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IToDo } from "../../atom";
import { ProgressItem } from "../../styles/BottomSectionStyle";
import {
  faCheck,
  faEllipsis,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";

function Progress({ progress }: { progress: IToDo["progress"] }) {
  switch (progress) {
    case "TO DO":
      return (
        <ProgressItem $color="#FFA080">
          <FontAwesomeIcon icon={faExclamation} />
        </ProgressItem>
      );
    case "DOING":
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
