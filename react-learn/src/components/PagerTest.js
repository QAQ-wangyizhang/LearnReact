import React, { Component } from 'react'
import Modal from './Modal';
import Pager from "./Pager"
import StudnetList from "./StudentList"


export default class PagerTest extends Component {
    constructor(props) {
        super(props)
        this.appkey = 'qfjdskjfsffd_1599095975670';
        this.state = {
            current: 2, // 当前页
            total: 100, // 数据的条数
            limit: 1, // 一页最多展示多少条
            panelNumber: 3, // 展示页的条数
            stus : [],
            isLoading : true
        }
        this.renderData(this.state.current,this.state.limit);
    }

    async renderData(page,size){
        this.setState({
            isLoading : true
        })
        let res = await this.getData(page,size);
        this.setState({
            total : res.data.cont,
            stus : res.data.findByPage,
            limit : size,
            current : page,
            isLoading : false
        })
    }

    async getData(page,size) {
        let res = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=${this.appkey}&page=${page}&size=${size}`)
                        .then(res => res.json());
        return res;
    }

    onPageChange = (target) => {
        this.setState({
            current: target
        })
        this.renderData(target,this.state.limit)
    }
    render() {
        return (
            < >
                <StudnetList stus={this.state.stus}></StudnetList>
                <Pager {...this.state} onPageChange={this.onPageChange}></Pager>
                <Modal show={this.state.isLoading}></Modal>
            </>
        )
    }
}
