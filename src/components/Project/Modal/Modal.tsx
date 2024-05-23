import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";

function Modal({ children }) {
  return createPortal(
    <FocusLock>
      <div className="w-full h-full fixed top-0 left-0 bg-black-100 bg-opacity-50 flex justify-center items-center z-50 text-black ">
        <div className="bg-white px-10 py-12 rounded-md w-3/4 h-4/5 flex flex-col justify-between gap-9 relative">
          {children}
        </div>
      </div>
    </FocusLock>,
    document.body
  );
}

export default Modal;
