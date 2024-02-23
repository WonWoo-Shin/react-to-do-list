import { Categories } from "../atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faDumbbell,
  faEllipsis,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

function CateIcon({ currCate }: { currCate: Categories }) {
  switch (currCate) {
    case Categories.business:
      return <FontAwesomeIcon icon={faBriefcase} />;
    case Categories.health:
      return <FontAwesomeIcon icon={faDumbbell} />;
    case Categories.study:
      return <FontAwesomeIcon icon={faPencil} />;
    default:
      return <FontAwesomeIcon icon={faEllipsis} />;
  }
}

export default CateIcon;
