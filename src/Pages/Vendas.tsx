import { useData } from "../Context/DataContext";
import VendaItem from "../Components/VendaItem";

const Vendas = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id} style={{listStyleType: "none"}}>
          <VendaItem venda={venda}/>
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
