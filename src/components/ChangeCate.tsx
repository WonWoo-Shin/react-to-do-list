import { useRecoilState } from "recoil";
import { Categories, changeCateAtom } from "../atom";
import { Select } from "../styles/HomeStyle";

function ChangeCate() {
  const [changeCate, setChangeCate] = useRecoilState(changeCateAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setChangeCate(event.currentTarget.value as Categories);
  };
  return (
    <Select value={changeCate} onInput={onInput}>
      <option value={Categories.all}>{Categories.all}</option>
      <option value={Categories.business}>{Categories.business}</option>
      <option value={Categories.health}>{Categories.health}</option>
      <option value={Categories.study}>{Categories.study}</option>
      <option value={Categories.other}>{Categories.other}</option>
    </Select>
  );
}

export default ChangeCate;
