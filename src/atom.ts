import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDosAtom = atom<IToDo[]>({
  key: "toDos",
  default: [],
});

export const selectAtom = atom<IToDo["category"]>({
  key: "select",
  default: "TO_DO",
});
