import { useSetRecoilState } from "recoil";
import { IToDo, selectAtom } from "../atom";

function SelectCate() {
  const setSelect = useSetRecoilState(selectAtom);
  const onChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const { currentTarget } = event;
    const { selectedIndex } = currentTarget;
    const selectedValue = currentTarget.options[selectedIndex]
      .value as IToDo["category"];
    setSelect(selectedValue);
  };
  return (
    <select name="category" onChange={onChange}>
      <option value="TO_DO">TO DO</option>
      <option value="DOING">DOING</option>
      <option value="DONE">DONE</option>
    </select>
  );
}

export default SelectCate;
