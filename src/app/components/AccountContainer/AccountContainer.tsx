import style from "./AccountContainer.module.css";

export default function AccountContainer(props: {
  children?: React.ReactNode;
  title: string;
}) {
  return (
    <div className={style.accountContainer}>
      <div className={style.header}>
        <h2>{props.title}</h2>
      </div>
      <div className={style.formContainer}>{props.children}</div>
    </div>
  );
}
