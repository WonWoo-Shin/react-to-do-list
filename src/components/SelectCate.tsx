import { useRecoilState } from "recoil";
import { IToDo, categoryAtom } from "../atom";

function SelectCate() {
  const [category, setCategory] = useRecoilState(categoryAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as IToDo["category"]);
  };
  return (
    <select value={category} onInput={onInput}>
      <option value="TO_DO">TO DO</option>
      <option value="DOING">DOING</option>
      <option value="DONE">DONE</option>
    </select>
  );
}

export default SelectCate;
