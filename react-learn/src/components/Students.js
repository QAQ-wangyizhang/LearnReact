import React from 'react'

export default function Students(props) {
    return (
        <li className="stu">
            【姓名】 ：{props.name}
            【性别】 ：{props.sex === 1 ? "男" : "女"}
            【电话】 ：{props.phone}
            【地址】 ：{props.address}
        </li>
    )
}
