import { useState } from "react";

function useModals() {
  const [modals, setModals] = useState({});

  const openModal = (id) => {
    console.log(id);
    setModals((prevModals) => ({ ...prevModals, [id]: true }));
  };

  const closeModal = (id) => {
    setModals((prevModals) => ({ ...prevModals, [id]: false }));
  };

  const isVisible = (id) => !!modals[id];

  return {
    isVisible,
    openModal,
    closeModal,
  };
}

export default useModals;
