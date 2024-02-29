import { atom, selector } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const enum Categories {
  all = "ALL",
  business = "BUSINESS",
  study = "STUDY",
  health = "HEALTH",
  other = "OTHER",
}

export interface IToDo {
  id: number;
  text: string;
  place?: string;
  progress: "TO DO" | "DOING" | "DONE";
  category: Categories;
}

export const toDosAtom = atom<IToDo[]>({
  key: "toDos",
  default: [],
});

export const changeCateAtom = atom<Categories>({
  key: "changeCate",
  default: Categories.all,
});

export interface IUserCate {
  id: number;
  text: string;
}

export const userCategoriesAtom = atom<IUserCate[]>({
  key: "userCategories",
  default: [],
});

export const selectedCateAtom = atom<Categories>({
  key: "selectedCate",
  default: Categories.business,
});

export const toDosSelector = selector({
  key: "toDosSelctor",
  get: ({ get }) => {
    const toDos = get(toDosAtom);
    const changeCate = get(changeCateAtom);
    if (changeCate === "ALL") {
      return toDos;
    } else {
      return toDos.filter((toDo) => toDo.category === changeCate);
    }
  },
});

export const progressSelector = selector({
  key: "progressSelector",
  get: ({ get }) => {
    const toDos = get(toDosAtom);
    return toDos.map((toDo) => toDo.progress);
  },
});
