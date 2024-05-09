import './Feed.css';

import Post from './Post/Post';
import galerinha from './imagem/galerinha.jpg';
import galeris from './imagem/galeris.jpg'
import meninos from './imagem/cascao-cebolinha.jpg'
import meninas from './imagem/monica-magali.jpg'
import monica from './imagem/monica4.jpg'
import cebolinha from './imagem/cebolinha3.jpg'
import magali from './imagem/magali3.jpg'
import cascao from './imagem/cascao3.jpg'
import xaveco from './imagem/xaveco.jpg'
import briga from './imagem/meninos-brigando.jpg'
import construcao from './imagem/construção-franjinha.jpg'
import franjinha from './imagem/franjinha2.jpg'
import pedagio from './imagem/pedagio-cebolinha.jpg'
import festa from './imagem/festa.jpg'



export default function Feed() {
    return (
        <div className="Feed">
            <Post
                foto={monica}
                title="Mônica._"
                imgSrc={galerinha}
                titular="Mônica._"
                body="Eu amo muito meus amigos da Rua do Limoeiro."/>
            <Post
                foto={cebolinha}
                title="Cebolinha._"
                imgSrc={galeris}
                titular="Cebolinha._"
                body="A Mônica é dentuçaaaa."/>
            <Post
                foto={cascao}
                title="Cascão._"
                imgSrc={meninos}
                titular="Cascão._"
                body="Meu parceiro Cebolinha é o melhor amigo de todos."/>
            <Post
                foto={magali}
                title="Magali._"
                imgSrc={meninas}
                titular="Magali._"
                body="Eu e a Mônica ficamos muito estressadas porque a mamãe mandou a gente limpar a nossa bagunça."/>
            <Post
                foto={xaveco}
                title="Xaveco._"
                imgSrc={briga}
                titular="Xaveco._"
                body="Nós vamos acabar com esses mulekes da outra rua."/>
            <Post
                foto={franjinha}
                title="Franjinha._"
                imgSrc={construcao}
                titular="Franjinha._"
                body="Esse Cascão não toma banho e acha que sabe alguma coisa sobre ciência."/>
            <Post
                foto={cebolinha}
                title="Cebolinha._"
                imgSrc={pedagio}
                titular="Cebolinha._"
                body="A Mônica e o Cascão são dois desemplegados."/>
            <Post
                foto={monica}
                title="Mônica._"
                imgSrc={festa}
                titular="Mônica._"
                body="Hoje é dia de festejar."/>
        </div>
    )
}