import { AuthContext } from "@/app/contexts/AuthContext";
import style from "./MessageModal.module.css";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function MessageModal({
  message,
  isDanger,
  setIsModalOpen,
  setIsLoadingModalOpen,
}: {
  message: string;
  isDanger: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoadingModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const ctx = useContext(AuthContext);

  function handleButtonClick() {
    if (isDanger) {
      setIsModalOpen(false);
      return;
    }
    setIsModalOpen(false);
    setIsLoadingModalOpen && setIsLoadingModalOpen(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
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
