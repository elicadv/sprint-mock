import S from "./Form.module.css";
import Label from "../Label/Label"

function Form() {
  return (
    <form>
      <Label texto= "Nome:"/>
      <input className={S.input} />
      <Label texto= "E-mail:"/>
      <input className={S.input} />
      <Label texto= "CPF:"/>
      <input className={S.input} />
      <div className={S.radio}>
          <input type="radio" name="sexo" />
          <Label texto="Masculino" />
          <input type="radio" name="sexo" />
          <Label className={S.radioMen} texto="Feminino" />
      </div>
      <button className={S.botao}>Enviar</button>
    </form>
  );
}

export default Form;