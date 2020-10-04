import React from 'react'
import "./index.css"
export default function ThreeLayout(props) {
    const defaultProps = {
        leftWidth : "200px",
        rightWidth : "200px",
        minWidth : "800px",
        minHeight : "500px"
    }
    const data = Object.assign({},defaultProps,props);
    return (
        <div className="container" style={{
            minHeight : data.minHeight
        }}>
            <div className="main" style={{
                minWidth : data.minWidth
            }}>
                {props.children}
            </div>
            <div className="aside-left" style={{
                width : data.leftWidth
            }}>
                {props.left}
            </div>
            <div className="aside-right" style={{
                width : data.rightWidth
            }}>
                {props.right}
            </div>
        </div>
    )
}
