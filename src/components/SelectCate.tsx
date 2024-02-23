import { useRecoilState } from "recoil";
import { Categories, selectedCateAtom } from "../atom";
import { SelectCateStyle } from "../styles/AddToDoStyle";

function SelectCate() {
  const [selectedCate, setSelectedCate] = useRecoilState(selectedCateAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setSelectedCate(event.currentTarget.value as Categories);
  };
  return (
    <SelectCateStyle value={selectedCate} onInput={onInput}>
      <option value={Categories.business}>Business</option>
      <option value={Categories.health}>Health</option>
      <option value={Categories.study}>Study</option>
      <option value={Categories.other}>Other</option>
    </SelectCateStyle>
  );
}

export default SelectCate;
