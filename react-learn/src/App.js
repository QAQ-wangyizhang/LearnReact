import React, { Component } from 'react'
// import OldLifeCycle from "./OldLifeCycle"
import NewLifeCycle from "./NewLifeCycle"

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
        const comp = this.state.show ? <NewLifeCycle n={this.state.n}></NewLifeCycle> : null
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


