import styled from "styled-components";

export const TopNav = styled.div`
  margin-bottom: 30px;
  span {
    display: inline-block;
    color: #2dbaee;
    font-size: 26px;
  }
  span:first-child {
    width: 25%;
    text-align: start;
  }
  span:nth-child(2) {
    width: 50%;
    text-align: center;
    color: #ffffff;
    font-size: 23px;
  }
  span:last-child {
    width: 25%;
    text-align: end;
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  div {
    width: 65px;
    height: 65px;
    color: #60b5ea;
    font-size: 25px;
    border-radius: 50%;
    border: 2px solid #626bab;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InputWrap = styled.div`
  position: relative;
`;

const CateInputStyle = styled.select`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  font-size: 20px;
  color: #ffffff;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid #626bab;
  outline: none;
`;

export const SelectCateStyle = styled(CateInputStyle)``;

export const InputStyle = styled(CateInputStyle)`
  caret-color: #2ebaee;
  &::placeholder {
    color: #7a84b7;
  }
`;

export const EraseBtnWrapStyle = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  width: 25px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EraseBtn = styled.div`
  color: #ffffff;
  background-color: #6975b7;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ButtonStyle = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  background-color: #2ebaee;
  border: none;
  color: #eff9fe;
  font-size: 15px;
  cursor: pointer;
`;

export const ErrorMsg = styled.span`
  position: absolute;
  left: 0;
  bottom: -2px;
  color: #ffffff;
  svg {
    margin-right: 5px;
  }
`;
