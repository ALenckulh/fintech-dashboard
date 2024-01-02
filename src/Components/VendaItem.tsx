import { NavLink } from "react-router-dom";
import { IVenda } from "../Context/DataContext";
import React from "react";

const style: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: "0.8rem",
  color: "var(--color-1)",
  textDecoration: "none",
  listStyleType: "none"
}

const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <NavLink to={`/vendas/${venda.id}`} className="venda box" style={style}>
      <div >
        {venda.id}
      </div>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </NavLink>
  );
};

export default VendaItem;
