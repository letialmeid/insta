import Sugestao from './sugestao'
import './Sugestoes.css'
import jeremias from './imagemd/jeremias1.jpg'
import menina from './imagemd/menininha.jpg'
import dorinha from './imagemd/dorinha.jpg'
import nimbus from './imagemd/nimbus.jpg'

var listaPerfil = [
    {
        nome: "Jeremias._",
        src: jeremias
    },
    {
        nome: "Denise._",
        src: menina
    },
    {
        nome: " Dorinha._",
        src: dorinha
    },
    {
        nome: " Nimbus._",
        src: nimbus
    }
]


export default function Sugestoes() {
    return (
        <ul className="sugestoes">
            {
                listaPerfil.map((usuario) => {
                    return <Sugestao imagem={usuario.src} nome={usuario.nome}/>
                })
            }

        </ul>
    )
}