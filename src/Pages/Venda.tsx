import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { IVenda } from "../Context/DataContext";
import Loading from "../Components/Loading";

type VendaSemData = Omit<IVenda, 'data'>

const style: React.CSSProperties = {
  textTransform: "capitalize",
  color: "var(--color-2)",
  fontSize: "1rem"
}

const Venda = () => {
  const { id } = useParams();

  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`
  );
  if (loading=== true) return <Loading/>
  if (data === null) return null;

  return (
    <div style={style}>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">
        Preco:{" "}
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data. pagamento}</div>
    </div>
  );
};

export default Venda;