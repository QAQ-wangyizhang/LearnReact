import React, { Component } from 'react'

export default class Tick extends Component {
    constructor(props){
        super(props);
        // 初始化状态
        this.state = {
            // 传入总时间 自己处理自己的倒计时
            left : this.props.number,
        };
        // 混合处理 类似于一下 对对象出现赋值
        // Object.assign(obj,A)
        this.timer = setInterval(() => {
            this.setState({
                left : this.state.left - 1
            });
            if(this.state.left <= 0){
                clearInterval(this.timer)
            }
        }, 1000);
        // 重新设置触发自动的重新渲染；

    }
    render() {
        return (
        <h1>倒计时剩余 : {this.state.left}</h1>
        )
    }
}
