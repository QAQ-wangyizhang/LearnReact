import React, { Component } from 'react'
import OldLifeCycle from "./OldLifeCycle"

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            n : 0,
            show : true
        }
    }
    handleClick = _ => {
        this.setState({
            n : this.state.n + 1
        })
    }
    render() {
        const comp = this.state.show ? <OldLifeCycle n={this.state.n}></OldLifeCycle> : null
        return (
            <div>
                {comp}
                <button onClick={this.handleClick}>属性n+1</button>
                <button onClick={()=>{
                    this.setState({
                        show : !this.state.show
                    })
                }}>显示/隐藏</button>
            </div>
        )
    }
}


