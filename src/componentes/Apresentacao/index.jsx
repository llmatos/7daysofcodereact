import Perfil from './assets/perfil.svg';
import './styles.css'
export default function Apresentacao() {
    return (
        <div className='apresentacao'>
            <img src={Perfil} alt="imagem do médico" className='apresentacao__imagem' />
            <div className='apresentacao__texto'>
                <h1 className='apresentacao__texto-nome'>Olá, Sônia</h1>
                <p className='apresentacao__texto-descricao'>Mais 4 consultas hoje</p>
            </div>
        </div>
    )
}