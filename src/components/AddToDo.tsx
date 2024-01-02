import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, selectedCateAtom, toDosAtom } from "../atom";

interface IForm {
  toDo: string;
}

function AddToDo() {
  const setToDos = useSetRecoilState(toDosAtom);
  const selectedCate = useRecoilValue(selectedCateAtom);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const addToDo = (data: IForm) => {
    setToDos((oldToDos) => [
      {
        id: Date.now(),
        text: data.toDo,
        category:
          selectedCate === Categories.all ? Categories.toDo : selectedCate,
      },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(addToDo)}>
        <input
          {...register("toDo", { required: "To do is empty" })}
          placeholder="Write to do"
        />
        <button>Add</button>
      </form>
      <span>{errors.toDo?.message}</span>
    </div>
  );
}

export default AddToDo;
