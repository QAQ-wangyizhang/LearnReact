import React, { Component } from 'react'
import Pager from "./Pager"
import StudnetList from "./StudentList"
const appkey = 'qfjdskjfsffd_1599095975670';
async function getData(page,size) {
    let res = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}`)
                    .then(res => res.json());
    return res;
}
export default class PagerTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 2, // 当前页
            total: 100, // 数据的条数
            limit: 2, // 一页最多展示多少条
            panelNumber: 3, // 展示页的条数
            stus : []
        }
        this.renderData(this.state.current,this.state.limit);
    }

    async renderData(page,size){
        let res = await getData(page,size);
        this.setState({
            total : res.data.cont,
            stus : res.data.findByPage,
            limit : size,
            current : page
        })
    }

    onPageChange = (target) => {
        this.setState({
            current: target
        })
        this.renderData(target,this.state.limit)
        // console.log("1")
    }
    render() {
        return (
            < >
                <StudnetList stus={this.state.stus}></StudnetList>
                <Pager {...this.state} onPageChange={this.onPageChange}></Pager>
            </>
        )
    }
}
