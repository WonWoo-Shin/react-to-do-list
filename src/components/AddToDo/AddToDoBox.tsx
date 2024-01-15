import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconBox, TopNav } from "../../styles/AddToDoStyle";
import { AddToDoBoxStyle } from "../../styles/HomeStyle";
import {
  faArrowLeft,
  faFilter,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import AddToDo from "./AddToDo";
import AddCate from "./AddCate";

function AddToDoBox() {
  return (
    <AddToDoBoxStyle>
      <TopNav>
        <span>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <span>Add new thing</span>
        <span>
          <FontAwesomeIcon icon={faFilter} />
        </span>
      </TopNav>
      <IconBox>
        <div>
          <FontAwesomeIcon icon={faPencil} />
        </div>
      </IconBox>
      <AddToDo />
      <AddCate />
    </AddToDoBoxStyle>
  );
}

export default AddToDoBox;
