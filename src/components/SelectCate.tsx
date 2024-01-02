import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, selectedCateAtom, userCategoriesAtom } from "../atom";

function SelectCate() {
  const [selectedCate, setSelectedCate] = useRecoilState(selectedCateAtom);
  const userCategories = useRecoilValue(userCategoriesAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setSelectedCate(event.currentTarget.value as Categories);
  };
  return (
    <select value={selectedCate} onInput={onInput}>
      <option value={Categories.toDo}>TO DO</option>
      <option value={Categories.doing}>DOING</option>
      <option value={Categories.done}>DONE</option>
      {userCategories.length > 0 &&
        userCategories.map((userCategory) => (
          <option key={userCategory.id} value={userCategory.text}>
            {userCategory.text}
          </option>
        ))}
    </select>
  );
}

export default SelectCate;
