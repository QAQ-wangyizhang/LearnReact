import React from 'react'

export default function Student(props) {
    // props.stu
    // console.log(props);
    return (
        <li>
            [姓名] :  {props.name}
            [性别] ： {props.sex === 1? "男" : "女"}
            [邮件] ： {props.email}
        </li>
    )
}
