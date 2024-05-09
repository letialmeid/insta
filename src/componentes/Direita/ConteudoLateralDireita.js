import './ConteudoLateralDireita.css';
import Conta from'./Conta';
import Sugestoes from './Sugestoes'
import ConteudoFinal from './sugestao-final'
import ParaVoce from './para-voce'

export default function ConteudoLateralDireita (){
    return(
        <div className='conteudoLateralDireito'>
            <Conta/>
            <ParaVoce/>
            <Sugestoes/>
            <ConteudoFinal/>
            
        </div>
    )
}