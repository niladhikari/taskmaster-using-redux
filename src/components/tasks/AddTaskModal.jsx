import Modal from "../Ui/Modal";

const AddTaskModal = ({isOpen,setIsOpen}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est
      inventore quam corporis. Sunt, cupiditate nulla perferendis nihil aliquid
      rerum!
    </Modal>
  );
};

export default AddTaskModal;
