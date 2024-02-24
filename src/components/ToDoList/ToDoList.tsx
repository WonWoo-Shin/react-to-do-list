import { useState } from "react";
import { IToDo } from "../../atom";
import {
  CateCircle,
  Column,
  Option,
  OptionArea,
  Place,
  RightSide,
  Time,
  ToDoItem,
  ToDoText,
} from "../../styles/BottomSectionStyle";

import CateIcon from "../CateIcon";
import Progress from "./Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import OptionPopUp from "./OptionPopUp";

function ToDoList({ id, text, place, progress, category }: IToDo) {
  const date = new Date(id);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <ToDoItem>
      <CateCircle>
        <CateIcon currCate={category} />
      </CateCircle>
      <ToDoText>
        <Column>
          <span>{text}</span>
          {place === "" || <Place>{place}</Place>}
        </Column>
        <RightSide>
          <Column>
            <Time>
              {date.getMonth() + 1}-{date.getDate()}
            </Time>
            <Progress progress={progress} />
          </Column>
          <OptionArea>
            <Option onClick={onClick}>
              <FontAwesomeIcon icon={faEllipsisV} />
            </Option>
            {isActive && (
              <OptionPopUp {...{ id, text, place, progress, category }} />
            )}
          </OptionArea>
        </RightSide>
      </ToDoText>
    </ToDoItem>
  );
}

export default ToDoList;
