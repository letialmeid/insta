import './Post.css'

import { CiHeart } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { GoPaperAirplane } from "react-icons/go";


export default function Post(props) {
    return (
        <div className="card Post">
            <div className="card-header">
                <img src={props.foto} className='foto'></img>
                <h4>{props.title}</h4>
            </div>
            <div className="card-body">
                <img src={props.imgSrc} />
                <div className='icones'>
                    <CiHeart class="icon" style={{ fontSize: "35px", color:'white'  }} />
                    <FiMessageCircle style={{ fontSize: "27px" }} />
                    <GoPaperAirplane style={{ fontSize: "27px" }} />
                </div>

                <div className='comentario'>
                    <h4>{props.titular}</h4>
                    <p>{props.body}</p>
                </div>

            </div>
            <div className="card-footer">
            </div>
        </div>
    )
}