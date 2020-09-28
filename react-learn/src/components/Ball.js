import React, { Component } from 'react'

export class Ball extends Component {

    constructor(props){
        super(props);
        this.state = {
            left : this.props.left,
            top : this.props.top,
            xSpeed : this.props.xSpeed,
            ySpeed : this.props.ySpeed,
        }
        const duration = 16;
        setInterval(() => {
            const xDis = this.state.xSpeed * duration / 1000;
            const yDis = this.state.ySpeed * duration / 1000;
            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;
            if(newLeft <= 0){
                newLeft = 0;
                this.setState({
                    xSpeed : -this.state.xSpeed
                })
            }else if(newLeft > document.documentElement.clientWidth - 100){
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed : -this.state.xSpeed
                })
            }

            if(newTop <= 0){
                newTop = 0;
                this.setState({
                    ySpeed : -this.state.ySpeed
                })
            }else if(newTop > document.documentElement.clientHeight - 100){
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    ySpeed : -this.state.ySpeed
                })
            }
            this.setState({
                left : newLeft,
                top : newTop
            })
        }, duration);
    }
    render() {
        return (
            <div className="ball" style={{
                backgroundColor : this.props.bg,
                left : this.state.left + "px",
                top : this.state.top + "px"
            }}>
            </div>
        )
    }
}

export default Ball
