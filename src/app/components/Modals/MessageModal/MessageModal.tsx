import style from "./MessageModal.module.css";

export default function MessageModal({
  message,
  isDanger,
  setIsModalOpen,
}: {
  message: string;
  isDanger: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className={style.bgContainer}>
      <div
        className={`${style.modalContainer} ${isDanger ? style.danger : style.success}`}
      >
        <h4>{message}</h4>
        <button onClick={() => setIsModalOpen(false)}> Fechar </button>
      </div>
    </div>
  );
}
