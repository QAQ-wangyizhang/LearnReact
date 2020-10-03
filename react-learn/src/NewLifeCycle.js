import React, { Component } from 'react'

export default class NewLifeCycle extends Component {
    state = {
        n: 1
    }
    // 没什么用不要用
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps",props,state,"属性状态更新,一开始调用")
        // return null // 不改变当前状态
        return { // 用新的对象替换掉之前的状态
            n : props.n
        }

    }

    // 更新阶段才会运行 必须成对出现且要返回值 了解一些
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("getSnapshotBeforeUpdate","真实的dom 已经渲染了")
        return 223
    }
    componentDidUpdate(prevProps, prevState,snap) {
        console.log("componentDidUpdate",snap)
    }
    
    
    render() {
        return (
            <div>
                <h1>状态{this.state.n}</h1>
                <p>
                    <button onClick={()=>{
                        this.setState({
                            n :this.state.n + 1
                        })
                    }}>
                        n +1
                    </button>
                </p>
            </div>
        )
    }
}
