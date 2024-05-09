import React, { useState } from 'react';
import './Post.css';
import { CiHeart } from 'react-icons/ci';
import { FiMessageCircle } from 'react-icons/fi';
import { GoPaperAirplane } from 'react-icons/go';

export default function Post(props) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="card Post">
      <div className="card-header">
        <img src={props.foto} className="foto" alt="user"></img>
        <h4>{props.title}</h4>
      </div>
      <div className="card-body">
        <img src={props.imgSrc} alt="post"></img>
        <div className="icones">
          <CiHeart
            className="icon"
            style={{ fontSize: '35px', color: liked ? 'red' : 'white' }}
            onClick={handleLikeClick}
          />
          <FiMessageCircle style={{ fontSize: '27px' }} />
          <GoPaperAirplane style={{ fontSize: '27px' }} />
        </div>

        <div className="comentario">
          <h4>{props.titular}</h4>
          <p>{props.body}</p>
        </div>
      </div>
      <div className="card-footer"></div>
    </div>
  );
}
