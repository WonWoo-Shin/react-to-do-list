import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, selectedCateAtom, toDosAtom } from "../../atom";
import {
  ButtonStyle,
  EraseBtn,
  EraseBtnWrap,
  InputStyle,
  InputWrap,
} from "../../styles/AddToDoStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
    watch,
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
  const watchToDo = watch("toDo");
  return (
    <>
      <form onSubmit={handleSubmit(addToDo)}>
        <InputWrap>
          <InputStyle
            {...register("toDo", { required: "To do is empty" })}
            placeholder="Write to do"
          />
          {watchToDo === "" || (
            <EraseBtnWrap>
              <EraseBtn onClick={() => setValue("toDo", "")}>
                <FontAwesomeIcon icon={faXmark} fontSize={"14px"} />
              </EraseBtn>
            </EraseBtnWrap>
          )}
        </InputWrap>
        <ButtonStyle>ADD YOUR THING</ButtonStyle>
      </form>
      <span>{errors.toDo?.message}</span>
    </>
  );
}

export default AddToDo;
