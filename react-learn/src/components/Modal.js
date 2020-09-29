import React from 'react'
import "./modal.css"
export default function Modal(props) {
    return (
        <div className={props.show? "modal": "modal none"}>
            <p>加载中...</p>
        </div>
    )
}
