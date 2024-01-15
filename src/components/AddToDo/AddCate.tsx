import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { userCategoriesAtom } from "../../atom";

interface ICate {
  newCate: string;
}

function AddCate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ICate>();
  const setUserCategories = useSetRecoilState(userCategoriesAtom);
  const addCate = (data: ICate) => {
    setUserCategories((prev) => [
      ...prev,
      { id: Date.now(), text: data.newCate },
    ]);
    setValue("newCate", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(addCate)}>
        <input
          {...register("newCate", { required: "Category is empty" })}
          placeholder="Write custom category"
        />
        <button>Add Category</button>
      </form>
      <span>{errors.newCate?.message}</span>
    </div>
  );
}

export default AddCate;
