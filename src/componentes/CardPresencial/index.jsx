import Chat from './assets/Chat.svg';
import Pin from './assets/pin.svg';
export default function CardPresencial({nome, perfil, horario}) {
    return (
        <div className="card">
            <div className="card__remoto__paciente">
                <img src={perfil} alt="paciente remoto" className="card__remoto-imagem" />
                <div className="card__remoto__paciente-informacao">
                    <h3 className="card__remoto-nome">{nome}</h3>
                    <div className="card__remoto__paciente-modalidade">
                        <img src={Pin} alt="logo de uma câmera" />
                        <p className="card__remoto__paciente-modalidade-texto">Consulta presencial</p>
                    </div>
                </div>

                <img src={Chat} alt="log chat" className="card__remoto__paciente-chat" />

            </div>
            <hr />
            <div className="card__descricao">
                <h3 className="card__descricao-horario">{horario}</h3>
                <div className="botao__ver-endereco">
                    <a href="#" className="botao__ver-endereco-link">Ver Endereço</a>
                </div>
            </div>
        </div>

    )

}