import React from 'react'

// 

export default function Pager(props) {
    const pageEnd = getPageEndNum(props);

    return (
        <>
            <span onClick={() =>{toPage(1,props)}}
            className={props.current === 1 ? "item disable" : "item"}>首页</span>
            <span className={props.current === 1 ? "item disable" : "item"}>上一页</span>
            <span className={props.current === pageEnd ? "item disable" : "item"}>下一页</span>
            <span 
            onClick={() =>{toPage(pageEnd,props)}}
            className={props.current === pageEnd ? "item disable" : "item"}>尾页</span>
            <span className="allPage">{props.current}/{pageEnd}</span>
        </>
    )
}
// 跳转到那一页
function toPage(target,props){
    if(props.current === target){
        return;
    }
    props.onPageChange && props.onPageChange(target);
}
// 得到总页数
function getPageEndNum(props) {
    return Math.ceil(props.total / props.limit)
}
