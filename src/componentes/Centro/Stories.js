import Story from "./Story"
import './Stories.css'
import cebolinha from './imagem/cebolinha3.jpg'
import monica from './imagem/monica4.jpg'
import cascao from './imagem/cascao3.jpg'
import magali from './imagem/magali3.jpg'
import xaveco from './imagem/xaveco.jpg'
import chico from './imagem/chicob.jpg'
import franjinha from './imagem/franjinha2.jpg'
import cascuda from './imagem/cascuda.jpg'



var listaUsuarios = [
    {
        nome: "Mônica._",
        src: monica
    },
    {
        nome: "Cebolinha._",
        src:cebolinha
    },
    {
        nome: "Magali._",
        src:magali
    },
    {
        nome: "Cascão._",
        src:cascao
    },
    {
        nome: "Xaveco._",
        src: xaveco
    },
    {
        nome: "Chico_B",
        src: chico
    },
    {
        nome: "Franjinha._",
        src:franjinha
    },
    {
        nome: "Cascuda._",
        src: cascuda
    },
    
]

export default function Stories() {
    return (
        <div className="Stories">
            {
                // Iteração -> Para cada usuário na lista de usuários, renderize um Story
                listaUsuarios.map((usuario) => {
                    return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.src} />
                })
            }

        </div>
    )
}