import Header from "../Header/Header";
import Form from "../Form/Form";
import React, { useState, useEffect } from "react";
import S from "./Produtos.module.css"
import Formulario from "../Formulario/Formulario";
import { Texto } from "../Texto/Texto";


function Produtos() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  
    async function handleRequisicao() {
      const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)
      const json = await response.json()
      setProducts(json.products)
    }
    
    useEffect(() => {
      handleRequisicao()
    }, [page])
  
  return (
    <>
     <Header/>
      <main className={S.container}>
        <div className={S.containerFilho}>
          <section className={S.secaoUm}>
            <Texto/>
          </section>
          <section className={S.secaoForm}>
            <Form />
          </section>
        </div>
        <fieldset className={S.fraseUm}>
          <legend>Sua seleção especial</legend>
        </fieldset>
        <div className={S.cards}>
        <>
        {products.map((item) => {
        return (
        <>
        <div key={item.id} className={S.produto}>
        <img src={item.image} className={S.imagem}></img>
        <p className={S.nome}>{item.name}</p>
        <p>{item.description}</p>
        <p>De:R${item.oldPrice}</p>
        <p>Por: R$ {item.price},00</p>
        <p>ou {item.installments.count}x de R${item.installments.value}</p>
        <button className={S.botaoCard}>Comprar</button>
        </div>
          </>
        );
      })}
    </>
    </div>
    
    <button className={S.botao} onClick={()=>{setPage(page+1)}}>Ainda mais produtos aqui!</button>
    </main>
    <fieldset className={S.fraseUm}></fieldset>
    <div>
    <Formulario/>
    </div>
    <div>
    <fieldset className={S.fraseUm}>
    <footer className={S.footer}>© Élica</footer>
    </fieldset>
    </div>
    </>
  );
}

export default Produtos;