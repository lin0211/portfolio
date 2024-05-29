import { useState } from "react";

interface ModalsState {
  [key: string]: boolean;
}

function useModals() {
  const [modals, setModals] = useState<ModalsState>({});

  const openModal = (id: string) => {
    setModals((prevModals) => ({ ...prevModals, [id]: true }));
  };

  const closeModal = (id: string) => {
    setModals((prevModals) => ({ ...prevModals, [id]: false }));
  };

  const isVisible = (id: string) => !!modals[id];

  return {
    isVisible,
    openModal,
    closeModal,
  };
}

export default useModals;
