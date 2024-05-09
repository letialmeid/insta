import './Sugestoes.css'


export default function Sugestao(props) {
    return (
        <div className="Sugestao">

            <div className="foto-sugestao">
                <img src={props.imagem} alt="Imagem da sugestao" className='imagem'/>
            </div>

            <div className="nome-sugestao">
                <p>{props.nome}</p>
            </div>

        </div>
    )
}