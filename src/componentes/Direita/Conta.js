import './Conta.css';
import ContaPerfil from './ContaPerfil';
import mauricio from '../Centro/imagem/mauricio.jpg';

export default function Conta(){
    return(
        <div className='Conta'>
            <ContaPerfil
            foto={mauricio}
            titulo="Maurício de Souza"
            />
        </div>
    )
}