import React, { Component } from 'react'
import Ball from "./Ball"
import random from "./random"


export default class BallList extends Component {

    constructor(props){
        super(props)
        this.state  = {
            ballsInfo : []
        }
        const timer = setInterval(() => {
            const info = {
                top : random(0,document.documentElement.clientHeight),
                left : random(0,document.documentElement.clientWidth),
                xSpeed : random(50,250),
                ySpeed : random(50,250),
                bg : `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`
            }
            this.setState({
                ballsInfo : [...this.state.ballsInfo,info]
            })
            if(this.state.ballsInfo.length >= 10){
                clearInterval(timer);
            }
        }, 1000);
    }
    render() {
        const balls = this.state.ballsInfo.map((item,i) => <Ball {...item} key={i}></Ball>)
        return (<div>
            {balls}
        </div> 
        )
    }
}
