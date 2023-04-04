import { useState } from 'react';
import Moveable from 'react-moveable';
import "./Move.css"

function Move() {

    const [impPosition, setImgPosition] = useState({x:0, y:0})
    const [imgSize, setImgSize] = useState({width:0, height:0})
    const [imgRotation, setImgRotation] = useState(0)

    const handleDrag = ({ target, beforeTranslate }) => {
        setImgPosition({ x: beforeTranslate[0], y: beforeTranslate[1] });
      };
    
    const handleResize = ({ target, width, height }) => {
        setImgSize({ width, height });
      };

    return (
        <Moveable
          target={<img src="https://via.placeholder.com/200x200.png?text=Move+me!" alt="Move me!" />}
        />
    );
}

export default Move
