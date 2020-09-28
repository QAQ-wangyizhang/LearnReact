import React, { Component } from 'react'
import Tick from "./Tick"

export default class TickControl extends Component {
    constructor(){
        super();
        // this.timeOver = this.timeOver.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    state = {
        isOver : false
    }
    handleClick(){
        console.log(this); //undefined
        console.log("点击了")
    }
    // 结果timeover 不在原型上 而在对象上
    timeOver= _ =>{
        console.log(this);
        this.setState({
            isOver : true
        })
    }
    render() {
        let msg = "倒计时进行中..."
        if(this.state.isOver){
            msg = "倒计时完成"
        }
        return (
            <div>
                <Tick num={10} onClick={this.handleClick} timeOver={this.timeOver}></Tick>
                <h2>{msg}</h2>
            </div>
        )
    }
}
