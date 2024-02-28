import { useRecoilState } from "recoil";
import { Categories, changeCateAtom } from "../atom";
import { Title } from "../styles/BottomSectionStyle";

function ChangeCate() {
  const [changeCate, setChangeCate] = useRecoilState(changeCateAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setChangeCate(event.currentTarget.value as Categories);
  };
  return (
    <Title value={changeCate} onInput={onInput}>
      <option value={Categories.all}>{Categories.all}</option>
      <option value={Categories.business}>{Categories.business}</option>
      <option value={Categories.health}>{Categories.health}</option>
      <option value={Categories.study}>{Categories.study}</option>
      <option value={Categories.other}>{Categories.other}</option>
    </Title>
  );
}

export default ChangeCate;
