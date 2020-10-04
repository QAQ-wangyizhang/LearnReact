import Form from "./common/Form"
import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div style={{
                userSelect: "none"
            }}>
                <Form></Form>
            </div>
        )
    }
}

