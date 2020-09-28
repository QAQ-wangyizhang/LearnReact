import React, { Component } from 'react'
import Pager from "./Pager"
export default class PagerTest extends Component {
    state = {
        current: 2,
        total: 100,
        limit: 9,
        panelNumber: 10,
    }
    onPageChange = (target) => {
        this.setState({
            current : target
        })
        // console.log("1")
    }
    render() {
        return (
            <>
                <Pager {...this.state} onPageChange={this.onPageChange}></Pager>
            </>
        )
    }
}
