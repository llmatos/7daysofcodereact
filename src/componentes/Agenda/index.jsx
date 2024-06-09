import './styles.css';
export default function Agenda({dia}) {
    return (
        <div className='barra__consulta'>
            <h1 className='barra__consulta-dia'>{dia}</h1>
        </div>
    )
}