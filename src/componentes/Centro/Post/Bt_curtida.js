import React, { useState } from 'react';
import { IoMdHeart, IoMdHeartEmpty, IoIosArrowDroprightCircle } from 'react-icons/io';

export default function Curtida() {
    var { like, setLiked } = useState(false);

    var headLike = () => {
        setLiked(!like);

    };

    return (
        <div class="icon" onClick={ setLiked(!like)}>
            {like ? <IoMdHeart style={{ color: 'red', border: '1px solid red' }} /> : <IoMdHeart style={{ color: 'white', border: '1px solid blue' }} />}
        </div>
    );
}
