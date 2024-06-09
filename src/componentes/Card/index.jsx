import Camera from './assets/Camera.svg';
import Chat from './assets/Chat.svg';
import './style.css'
export default function Card({nome, horario, perfil}) {
    return (
        <div className="card">
            <div className="card__remoto__paciente">
                <img src={perfil} alt="paciente remoto" className="card__remoto-imagem" />
                <div className="card__remoto__paciente-informacao">
                    <h3 className="card__remoto-nome">{nome}</h3>
                    <div className="card__remoto__paciente-modalidade">
                        <img src={Camera} alt="logo de uma câmera" />
                        <p className="card__remoto__paciente-modalidade-texto">Consulta Remota</p>
                    </div>
                </div>

                <img src={Chat} alt="log chat" className="card__remoto__paciente-chat" />

            </div>
            <hr />
            <div className="card__descricao">
                <h3 className="card__descricao-horario">{horario}</h3>
                <div className="botoes">
                    <div className="botao__ligar-video">
                        <a href="#" className="botao__ligar-video-link">Ligar por Vídeo</a>
                    </div>
                    <div className="botao__ligar-audio">
                        <a href="#" className="botao__ligar-audio-link">Ligar por Audio</a>
                    </div>

                </div>
            </div>
        </div>
    )
}