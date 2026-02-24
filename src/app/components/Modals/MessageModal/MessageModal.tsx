
import style from "./MessageModal.module.css";
import { useRouter } from "next/navigation";

export default function MessageModal({
  message,
  isDanger,
  setIsModalOpen,
}: {
  message: string;
  isDanger: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();

  function handleButtonClick() {
    if (isDanger) {
      setIsModalOpen(false);
      return;
    }
    router.push("/login");
  }
  return (
    <div className={style.bgContainer}>
      <div
        className={`${style.modalContainer} ${isDanger ? style.danger : style.success}`}
      >
        <h4>{message}</h4>
        <button onClick={handleButtonClick}>
          {isDanger ? "Fechar" : "Ir para Login"}
        </button>
      </div>
    </div>
  );
}
