import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDosAtom } from "../atom";

interface IForm {
  toDo: string;
}

function AddToDo() {
  const setToDos = useSetRecoilState(toDosAtom);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const addToDo = (data: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: data.toDo, category: "TO_DO" },
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
