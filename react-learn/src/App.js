import React, { Component } from 'react'
import OldLifeCycle from "./OldLifeCycle"

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            n : 0
        }
    }
    handleClick = _ => {
        this.setState({
            n : this.props.n + 1
        })
    }
    render() {
        return (
            <div>
                <OldLifeCycle></OldLifeCycle>
                <button onClick={handleClick}>n+1</button>
            </div>
        )
    }
}


