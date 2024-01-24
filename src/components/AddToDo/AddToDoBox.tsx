import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconBox, TopNav } from "../../styles/AddToDoStyle";
import { AddToDoBoxStyle } from "../../styles/HomeStyle";
import { faArrowLeft, faFilter } from "@fortawesome/free-solid-svg-icons";
import AddToDo from "./AddToDo";
import SelectCate from "../SelectCate";

import CateIcon from "../CateIcon";
import { useRecoilValue } from "recoil";
import { selectedCateAtom } from "../../atom";

function AddToDoBox() {
  const selectedCate = useRecoilValue(selectedCateAtom);
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
          <CateIcon currCate={selectedCate} />
        </div>
      </IconBox>
      <SelectCate />
      <AddToDo />
    </AddToDoBoxStyle>
  );
}

export default AddToDoBox;
