import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TopSectionStyle } from "../styles/HomeStyle";
import {
  DonePercent,
  LeftSide,
  RightSide,
  ToDosCount,
} from "../styles/TopSectionStyle";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useRecoilValue } from "recoil";
import { Categories, toDosAtom } from "../atom";

function TopSection() {
  const toDos = useRecoilValue(toDosAtom);
  const done = toDos.filter((toDo) => toDo.category === Categories.done);
  const donePercent = Math.round((done.length / toDos.length) * 100);
  return (
    <TopSectionStyle>
      <LeftSide>
        <div>
          <FontAwesomeIcon icon={faBars} fontSize={"25px"} />
        </div>
        <div>
          <span>
            Your <br /> Things
          </span>
        </div>
        <div>
          <span>{new Date().toDateString()}</span>
        </div>
      </LeftSide>
      <RightSide>
        <ToDosCount>
          <span>{toDos.length}</span>
          <span>To do</span>
        </ToDosCount>
        <DonePercent>
          {toDos.length === 0 || <span>{donePercent}% done</span>}
        </DonePercent>
      </RightSide>
    </TopSectionStyle>
  );
}

export default TopSection;
