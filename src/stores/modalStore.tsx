import { ReactElement } from "react";
import { create } from "zustand";

// Modal 인터페이스 정의
export interface Modal {
  isOpen: boolean;
  component: ReactElement | null;
  title: string;
}

// Zustand 상태와 액션에 대한 타입 정의
interface ModalStore {
  modal: Modal;
  setModal: (modal: Modal) => void;
}

// useModalStore 생성
const useModalStore = create<ModalStore>((set) => ({
  modal: {
    title: "",
    isOpen: false,
    component: null,
  },
  setModal: (modal: Modal) => set({ modal }),
}));

export default useModalStore;
