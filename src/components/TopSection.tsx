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
import { progressSelector } from "../atom";

function TopSection() {
  const progresses = useRecoilValue(progressSelector);
  const done = progresses.filter((progress) => progress === "DONE");
  const completionRate = Math.round((done.length / progresses.length) * 100);
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
          <span>{progresses.length}</span>
          <span>To do</span>
        </ToDosCount>
        <DonePercent>
          {progresses.length === 0 || <span>{completionRate}% done</span>}
        </DonePercent>
      </RightSide>
    </TopSectionStyle>
  );
}

export default TopSection;
