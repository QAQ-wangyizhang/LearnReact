import React from 'react'

// 

export default function Pager(props) {
    const pageEnd = getPageEndNum(props);// 总页数
    let min = minPage(props);//最小页数
    let max = maxPage(min, props, pageEnd);//最大页数
    const pagesNum = [];
    for (let i = min; i <= max; i++) {
        pagesNum.push(<span key={i} className={i === props.current ? "item active" : "item"} onClick={() => { toPage(i, props) }}>{i}</span>)
    }
    return (
        <div className="page">
            <span onClick={() => { toPage(1, props) }}
                className={props.current === 1 ? "item disable" : "item"}>首页</span>
            <span onClick={() => { toPage(props.current - 1 <= 1 ? 1 : props.current - 1, props) }}
                className={props.current === 1 ? "item disable" : "item"}>上一页</span>
            {/* 数字页 */}
            {pagesNum}
            <span onClick={() => { toPage(props.current + 1 > pageEnd ? pageEnd : props.current + 1, props) }}
                className={props.current === pageEnd ? "item disable" : "item"}>下一页</span>
            <span
                onClick={() => { toPage(pageEnd, props) }}
                className={props.current === pageEnd ? "item disable" : "item"}>尾页</span>
            <span className="allPage">{props.current}/{pageEnd}</span>
        </div>
    )
}
// 跳转到那一页
function toPage(target, props) {
    if (props.current === target) {
        return;
    }
    props.onPageChange && props.onPageChange(target);
}
// 获得页数最小值
function minPage(props) {
    let min = props.current - Math.floor(props.panelNumber / 2);
    if (min < 1) {
        min = 1;
    }
    return min;
}
function maxPage(min, props, pageEnd) {
    let max = min + props.panelNumber - 1;
    if (max > pageEnd) {
        max = pageEnd;
    }
    return max;
}
// 得到总页数
function getPageEndNum(props) {
    return Math.ceil(props.total / props.limit)
}
