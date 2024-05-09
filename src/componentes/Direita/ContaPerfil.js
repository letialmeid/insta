import './ContaPerfil.css'


export default function ContaPerfil(props){
    return(
        <div className='Conta-nome'> 
            <img src={props.foto} className='foto-perfil'/>
            <h4> {props.titulo}</h4>
        </div>
    )
}
