import * as React from "react";
import Moveable from "react-moveable";
import './Test.css'
export default function App() {
    const targetRef = React.useRef(null);

    return (
        <div className="root">
            <div className="container">
                <div className="target" ref={targetRef}>

                </div>
                <Moveable
                    target={targetRef}
                    draggable={true}
                    throttleDrag={1}
                    edgeDraggable={false}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    resizable= {true}
                    scalable= {true}
                    rotatable= {true}
                    onDrag={e => {
                        e.target.style.transform = e.transform;
                    }}
                    
                />
            </div>
        </div>
    );
}