import style from "./LoadingModal.module.css";

export default function LoadingModal() {
  return (
    <div className={style.container}>
      <div className={style.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
