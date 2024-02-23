import { atom } from "recoil";

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
