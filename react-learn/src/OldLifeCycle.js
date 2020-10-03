import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 0
        };
        console.log("constructor", "一个新的组件诞生了！！！")
    }
    componentWillMount() {
        console.log("compnentWillMount", "组件即将被挂载")

        // 不推荐使用
        // this.setState({
        //     n : 3
        // })
    }
    render() {
        console.log("render","返回的react元素会挂载到虚拟dom树中 渲染到真实的dom中")
        return (
            <div>
                <h1>旧版生命周期组件</h1>
                <h2>属性n:{this.props.n}</h2>
                <h2>属性n:{this.state.n}</h2>
            </div>
        )
    }
}
