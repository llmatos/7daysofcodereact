import './style.css';
import Consulta from './assets/Item1.svg';
import Cliente from './assets/Item2.svg';
import Relatorio from './assets/Item3.svg';
import Menu from './assets/Item4.svg';

export default function Rodape() {
    return (
        <footer className="rodape">
            <a href="#" className="link__item">
                <img src={Consulta} alt="Consultas" />
            </a>
            <a href="#">
                <img src={Cliente} alt="Clientes" />
            </a>
            <a href="#">
                <img src={Relatorio} alt="Relatórios" />
            </a>
            <a href="#">
                <img src={Menu} alt="Menu" />
            </a>
            
        </footer>


    )
}