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

export const enum Progresses {
  all = "ALL",
  toDo = "TO_DO",
  doing = "DOING",
  done = "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  place?: string;
  progress: Progresses;
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

export const changeProgressAtom = atom<Progresses>({
  key: "changeProgress",
  default: Progresses.all,
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
    const cate = get(changeCateAtom);
    const progress = get(changeProgressAtom);
    const cateFilterToDos =
      cate === Categories.all
        ? toDos
        : toDos.filter((toDo) => cate === toDo.category);

    if (progress == Progresses.all) {
      return cateFilterToDos;
    } else {
      return cateFilterToDos.filter((toDo) => progress === toDo.progress);
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
