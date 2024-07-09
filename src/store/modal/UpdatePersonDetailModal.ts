import { create } from "zustand";

interface ModalState {
  updatePersonDetailModalOpen: boolean;
  openUpdatePersonDetailModal: () => void;
  closeUpdatePersonDetailModal: () => void;
}

export const usePersonDetailModalStore = create<ModalState>((set) => ({
  updatePersonDetailModalOpen: false,
  openUpdatePersonDetailModal: () => set({ updatePersonDetailModalOpen: true }),
  closeUpdatePersonDetailModal: () =>
    set({ updatePersonDetailModalOpen: false }),
}));
