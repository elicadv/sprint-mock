import S from "./Form.module.css";
import Label from "../Label/Label"

function Form() {
  return (
    <form>
      <Label texto= "Nome:"/>
      <input type="text" pattern="^[a-zA-Z][a-zA-Z-_\.]{1,20}$" className={S.input} />
      <Label texto= "E-mail:"/>
      <input type="email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' className={S.input} />
      <Label texto= "CPF:"/>
      <input type="text" pattern='^[0-9]{11}$' className={S.input} />
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