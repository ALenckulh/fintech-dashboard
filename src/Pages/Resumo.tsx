import React from "react";
import { useData } from "../Context/DataContext";
import GraficoVendas from "../Components/GraficoVendas";

const spanStyle: React.CSSProperties = {
  color: "var(--color-2)",
};

const Resumo = () => {
  const { data } = useData();
  console.log(data);
  if (data == null) return null;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span style={spanStyle}>
            {data.filter((i) => i.status !== 'falha')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span style={spanStyle}>
            {data
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>A Receber</h2>
          <span style={spanStyle}>
            {data.filter((i) => i.status === 'processando')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <GraficoVendas data={data}></GraficoVendas>
      </div>
    </section>
  );
};

export default Resumo;
