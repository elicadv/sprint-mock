import Label from "../Label/Label";
import S from "./Formulario.module.css";


function Formulario (){
    return(
        <section className={S.container}>
            <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
            <div>
            <form>
                <Label texto="Nome do seu amigo:"/>
                <input input type="text" pattern="^[a-zA-Z][a-zA-Z-_\.]{1,20}$" required className={S.imput} placeholder="Nome"></input>
                <Label texto="E-mail:"/>
                <input type="email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required className={S.imput} placeholder="E-mail"></input>
                <button className={S.botao}>Enviar agora</button>
            </form>
            </div>
        </section>
    )
}

export default Formulario