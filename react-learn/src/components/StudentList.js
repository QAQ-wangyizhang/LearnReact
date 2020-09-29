import React from 'react'
import Students from "./Students"
export default function StudentList(props) {
    const list = props.stus.map((item,i) => <Students key={i} {...item}></Students>)
    return (
        <ul className="list">
            {list}
        </ul>
    )
}
