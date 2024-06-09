import './styles.css';
import Battery from './assets/battery.svg';
import Signal from './assets/signal_cellular.svg';
import Wifi from './assets/wifi.svg';
export default function BarraDeStatus() {
    return (
        <div className='barra'>
            <div className='barra__horario'>3:33</div>
            <div className='barra__status'>
                <img src={Signal} alt="sinal de rede" className='barra__status-imagem' />
                <img src={Battery} alt="nível da bateria" className='barra__status-imagem' />
                <img src={Wifi} alt="sinal wifi" className='barra__status-imagem' />
            </div>
        </div>

    )
}