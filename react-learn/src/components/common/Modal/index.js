import React from 'react'
import "./index.css"
export default function Modal(props) {
    const data = Object.assign({},props,props.children)
    return (
        <div onClick={(e)=>{
            if(e.target.className === "modal"){
                data.onClose();
            }
        }}  className="modal" style={{
            backgroundColor : data.bg || "rgba(0, 0, 0, 0.5)"
        }}>
            <div className="center-modal">
                {props.children}
            </div>
            
        </div>
    )
}
