import Header from "../Header/Header";
import Form from "../Form/Form";
import React, { useState, useEffect } from "react";
import S from "./Produtos.module.css"


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
            <h2>Ajude o algorítimo a ser mais certeiro</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ultricies tellus nec mi porta convallis sollicitudin
              eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse
              semper pretium consectetur. Praesent bibendum arcu risus, sit amet
              iaculis ex tempus quis. Cras et erat ut tellus vulputate
              tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu
              non felis tristique eleifend.
            </p>

            <p>
              Morbi eu condimentum urna. Curabitur eu magna eget turpis
              condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar
              purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra.
              Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla
              varius elementum erat vel pharetra. Aenean sit amet nisi diam.
              Morbi viverra, magna ac luctus commodo, odio ante suscipit libero,
              at mattis augue est vel metus.
            </p>
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
    </>
  );
}

export default Produtos;