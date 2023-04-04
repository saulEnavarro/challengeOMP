import { useState } from 'react';
import React from 'react';
import Moveable from "react-moveable";
import "./Move.css"

function Move(props) {
    console.log(props)

    const targetRef = React.useRef(null);

    const [impPosition, setImgPosition] = useState({x:0, y:0})
    const [imgScale, setImgScale] = useState({width:1, height:1})
    const [imgRotation, setImgRotation] = useState({degree:0})
    
    
    function handleDrag({beforeTranslate}) {
        const [x, y] = beforeTranslate;
        setImgPosition({ x, y });
        console.log(`translate(${impPosition.x}px, ${impPosition.y}px)`)
        return `translate(${impPosition.x}px, ${impPosition.y}px)`;
      }
      function handleResize({width,height}){
        setImgScale({ width, height });
        return `scale(${imgScale.width}, ${imgScale.height})`;
      };    
      function handleRotation({degree}){
        setImgRotation({ degree});
        return `rotate(${imgRotation.degree})`;
      };    

    return (
        <div className="root">
            <div className="container">
                <div className="target" ref={targetRef}>Move Me!</div>
                <Moveable
                    target={targetRef}

                    draggable={true}
                    scalable= {true}
                    rotatable= {true}


                    throttleDrag={1}
                    edgeDraggable={false}
                    startDragRotate={0}
                    throttleDragRotate={0}

                    onDrag={(e) => {
                    e.target.style.transform = e.transform;
                    console.log(e)
                    }}


                    keepRatio={false}
                    throttleScale={0}
                    renderDirections={["nw","n","ne","w","e","sw","s","se"]}
                    onScale={e => {
                        e.target.style.transform = e.drag.transform;
                        console.log("onScale",e.drag.transform)
                    }}


                    throttleRotate={0}
                    rotationPosition={"top"}
                    onRotate={e => {
                        e.target.style.transform = e.drag.transform;
                        console.log("onRotate", e.drag.transform)
                    }}
                />
            </div>
        </div>
    );
}

export default Move
