import S from "./Button.module.css";

export function Button({ name }) {
  return (
    <>
      <button className={S.botao}>{name}</button>
    </>
  );
}