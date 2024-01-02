import resumo from "../assets/icons/resumo.svg";
import vendas from "../assets/icons/vendas.svg";
import webhook from "../assets/icons/webhooks.svg";
import configuracoes from "../assets/icons/configuracoes.svg";
import contato from "../assets/icons/contato.svg";
import sair from "../assets/icons/sair.svg";
import fintech from "../assets/fintech.svg";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <img className="box" src={fintech} alt="Fintech Logo" />
      <ul>
        <li>
          <NavLink to="/">
            <span>
              <img src={resumo} />
            </span>
            Resumo
          </NavLink>
        </li>
        <li>
          
          <NavLink to="/vendas"><span>
            <img src={vendas} />
          </span>Vendas</NavLink>
        </li>
        <li>
          <a><span>
            <img src={webhook} />
          </span>Webhook</a>
        </li>
        <li>
          <a><span>
            <img src={configuracoes} />
          </span>Configurações</a>
        </li>
        <li>
          <a><span>
            <img src={contato} />
          </span>Contato</a>
        </li>
        <li>
          <a><span>
            <img src={sair} />
          </span>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
