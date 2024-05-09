import logo from '../../imagens/logo-branco.jpg';

import Menu from '../../TextMenu';
import './ConteudoLateralEsquerda.css'
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { CgAddR } from "react-icons/cg";
import { TbBrandMessenger } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { RxVideo } from "react-icons/rx";
import { MdOutlineExplore } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";


export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo'/>  
            
            <ul>
                <Menu nome="Início"  classe = "text-menu" icone={<GoHomeFill style={{ fontSize: "25px" }}/> }  />
                <Menu nome="Pesquisa" classe = "text-menu" icone = {<IoSearch style={{ fontSize: "25px" }}/>} />
                <Menu nome="Explorar" classe = "text-menu" icone = {<MdOutlineExplore style={{ fontSize: "25px" }}/>} />
                <Menu nome="Reels" classe = "text-menu" icone = {<RxVideo style={{ fontSize: "25px" }}/>} />
                <Menu nome = "Mensagens" classe = "text-menu" icone = {<TbBrandMessenger style={{ fontSize: "25px" }}/>}/>
                <Menu nome = "Notificações" classe = "text-menu" icone = {<GoHeart style={{ fontSize: "25px" }}/>}/>
                <Menu nome = "Criar" classe = "text-menu" icone = {<CgAddR style={{ fontSize: "25px" }}/>}/>
                <Menu className="Perfil" nome = "Profile" classe = "text-menu" icone = {<FaUserAlt style={{ fontSize: "25px" }}/>}/>
                <Menu nome = "Mais" classe = "text-menu" icone = {<VscMenu style={{ fontSize: "25px" }}/>}/>
                
            </ul>
        </div>
    )
}

