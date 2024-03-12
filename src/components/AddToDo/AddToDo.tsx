import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Progresses, selectedCateAtom, toDosAtom } from "../../atom";
import {
  ButtonStyle,
  EraseBtn,
  EraseBtnWrapStyle,
  ErrorMsg,
  InputStyle,
  InputWrap,
} from "../../styles/AddToDoStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

interface IForm {
  toDo: string;
  place: string;
}

function EraseBtnWrap({ eraseValue }: { eraseValue: () => void }) {
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
    },
  });
  const addToDo = (data: IForm) => {
    setToDos((oldToDos) => [
      {
        id: Date.now(),
        text: data.toDo,
        place: data.place,
        time: Date.now(),
        progress: Progresses.toDo,
        category: selectedCate,
      },
      ...oldToDos,
    ]);
    setValue("toDo", "");
    setValue("place", "");
  };
  const [watchToDo, watchPlace] = watch(["toDo", "place"]);
  return (
    <>
      <form onSubmit={handleSubmit(addToDo)}>
        <InputWrap>
          <InputStyle
            as="input"
            {...register("toDo", { required: "Write your thing" })}
            placeholder="Thing"
          />
          {watchToDo === "" || (
            <EraseBtnWrap eraseValue={() => setValue("toDo", "")} />
          )}
          <ErrorMsg>
            {errors.toDo && (
              <>
                <FontAwesomeIcon icon={faTriangleExclamation} />
                {errors.toDo.message}
              </>
            )}
          </ErrorMsg>
        </InputWrap>
        <InputWrap>
          <InputStyle as="input" {...register("place")} placeholder="Place" />
          {watchPlace === "" || (
            <EraseBtnWrap eraseValue={() => setValue("place", "")} />
          )}
        </InputWrap>
        <ButtonStyle>ADD YOUR THING</ButtonStyle>
      </form>
    </>
  );
}

export default AddToDo;
