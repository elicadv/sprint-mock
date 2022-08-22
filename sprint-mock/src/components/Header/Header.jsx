import S from "./Header.module.css";
import { Button } from "../Button/Button";

export function Header() {
  return (
    <div className={S.background}>
      <header className={S.containerFilho}>
        <p className={S.titulo}>uma seleção de produtos</p>
        <p className={S.subtitulo}>especial para você</p>
        <p className={S.p}>
          Todos os produtos desta lista foram selecionado a partir da sua
          navegação. Aproveite!
        </p>
        <div className={S.botao}>
          <Button name="Conheça a Linx" />
          <Button name="Ajude o algorítimo" />
          <Button name="Seus produtos" />
          <Button name="Compartilhe" />
        </div>
      </header>
    </div>
  );
}

export default Header;