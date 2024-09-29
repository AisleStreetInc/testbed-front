import ModalLayout from "../../layouts/ModalLayout";
import useModalStore from "../../stores/modalStore";

const GlobalModal = () => {
  const { modal, setModal } = useModalStore();

  if (!modal.isOpen) return null;
  return (
    <div
      className="fixed top-0 left-0 w-svw h-svh bg-black/80 z-[99] flex items-center justify-center"
      onClick={() =>
        setModal({
          ...modal,
          isOpen: false,
        })
      }
    >
      <div
        className="w-1/2 bg-white rounded h-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalLayout title={modal.title}>{modal.component}</ModalLayout>
      </div>
    </div>
  );
};

export default GlobalModal;
