import { useRecoilState } from "recoil";
import { Progresses, changeProgressAtom } from "../atom";
import { Select } from "../styles/HomeStyle";

function ChangeProgress() {
  const [changeProgress, setChangeProgress] =
    useRecoilState(changeProgressAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setChangeProgress(event.currentTarget.value as Progresses);
  };
  return (
    <Select value={changeProgress} onInput={onInput}>
      <option value={Progresses.all}>{Progresses.all}</option>
      <option value={Progresses.toDo}>{Progresses.toDo}</option>
      <option value={Progresses.doing}>{Progresses.doing}</option>
      <option value={Progresses.done}>{Progresses.done}</option>
    </Select>
  );
}

export default ChangeProgress;
