import React from 'react'

export default function App(props) {
    return (
        <div className="app">
            {props.html}
            {props.children}
            {props.div || "没有啊"}
        </div>
    )
}

