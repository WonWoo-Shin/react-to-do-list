import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, selectedCateAtom, toDosAtom } from "../../atom";
import {
  ButtonStyle,
  EraseBtn,
  EraseBtnWrapStyle,
  InputStyle,
  InputWrap,
} from "../../styles/AddToDoStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface IForm {
  toDo: string;
  place: string;
  time: string;
}

function EraseBtnWrap({ eraseValue }: any) {
  return (
    <EraseBtnWrapStyle>
      <EraseBtn onClick={eraseValue}>
        <FontAwesomeIcon icon={faXmark} fontSize={"14px"} />
      </EraseBtn>
    </EraseBtnWrapStyle>
  );
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
  } = useForm<IForm>({
    defaultValues: {
      toDo: "",
      place: "",
      time: "",
    },
  });
  const addToDo = (data: IForm) => {
    setToDos((oldToDos) => [
      {
        id: Date.now(),
        text: data.toDo,
        place: data.place,
        time: data.time,
        category:
          selectedCate === Categories.all ? Categories.toDo : selectedCate,
      },
      ...oldToDos,
    ]);
    setValue("toDo", "");
    setValue("place", "");
    setValue("time", "");
  };
  const [watchToDo, watchPlace, watchTime] = watch(["toDo", "place", "time"]);
  return (
    <>
      <form onSubmit={handleSubmit(addToDo)}>
        <InputWrap>
          <InputStyle
            {...register("toDo", { required: "Write your thing" })}
            placeholder="Thing"
          />
          {watchToDo === "" || (
            <EraseBtnWrap eraseValue={() => setValue("toDo", "")} />
          )}
        </InputWrap>
        <InputWrap>
          <InputStyle {...register("place")} placeholder="Place" />
          {watchPlace === "" || (
            <EraseBtnWrap eraseValue={() => setValue("place", "")} />
          )}
        </InputWrap>
        <InputWrap>
          <InputStyle {...register("time")} placeholder="Time" />
          {watchTime === "" || (
            <EraseBtnWrap eraseValue={() => setValue("time", "")} />
          )}
        </InputWrap>
        <ButtonStyle>ADD YOUR THING</ButtonStyle>
      </form>
      <span>{errors.toDo?.message}</span>
    </>
  );
}

export default AddToDo;
