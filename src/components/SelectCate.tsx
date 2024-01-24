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
      <option value={Categories.business}>{Categories.business}</option>
      <option value={Categories.health}>{Categories.health}</option>
      <option value={Categories.study}>{Categories.study}</option>
      <option value={Categories.other}>{Categories.other}</option>
    </SelectCateStyle>
  );
}

export default SelectCate;
