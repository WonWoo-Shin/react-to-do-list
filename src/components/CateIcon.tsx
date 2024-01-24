import { Categories } from "../atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faDumbbell,
  faEllipsis,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

function CateIcon({ currCate }: { currCate: Categories }) {
  return (
    <>
      {currCate === Categories.business && (
        <FontAwesomeIcon icon={faBriefcase} />
      )}
      {currCate === Categories.health && <FontAwesomeIcon icon={faDumbbell} />}
      {currCate === Categories.study && <FontAwesomeIcon icon={faPencil} />}
      {currCate === Categories.other && <FontAwesomeIcon icon={faEllipsis} />}
    </>
  );
}

export default CateIcon;
