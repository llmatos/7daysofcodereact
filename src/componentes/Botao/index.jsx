import './style.css';
import Mais from './assets/maisicone.svg';
export default function Botao() {
    return (
        <div>
            <button className="botao">
                <img src={Mais} alt=""/>
            </button>
        </div>
    )
}