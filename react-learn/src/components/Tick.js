import React, { Component } from 'react'

export default class Tick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: this.props.num
        }
        const timer = setInterval(() => {
            this.setState({
                left: this.state.left - 1
            })
            if (this.state.left <= 0) {
                clearInterval(timer)
                this.props.timeOver && this.props.timeOver();
            }
        }, 1000);
    }
    render() {
        return (
            <h1 onClick={this.props.onClick}>{this.state.left}</h1>
        )
    }
}
