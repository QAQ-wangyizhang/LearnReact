
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        val: "1323",
        check: true,
        loves: ["足球", "篮球", "音乐", "其他"],
        chooseLoves: ["足球"],
        selVal: ""

    }
    render() {
        const checkboxs = this.state.loves.map(item => (<label key={item}>{item}<input
            type="checkbox"
            checked={this.state.chooseLoves.includes(item)}
            onChange={e => {
                if (e.target.checked) {
                    this.setState({
                        chooseLoves: [...this.state.chooseLoves, item]
                    })
                } else {
                    this.setState({
                        chooseLoves: this.state.chooseLoves.filter(fl => fl !== item)
                    })
                }
            }}
        /></label>))
        return (
            <div style={{
                userSelect: "none"
            }}>


                {/* 默认情况下非受控组件 */}
                {/* 赋予value值即为受控组件 */}
                {/* <input type="text" value={this.state.val} onChange={(e)=>{
                   this.setState({
                       val : e.target.value
                   })
               }}/> 
               <button onClick={()=>{
                   console.log(this.state.val)
               }}>获取文本框的值</button>
               <input type="checkbox" checked ={this.state.check} onChange={(e)=>{
                   this.setState({
                       check : e.target.checked
                   })
               }}/> */}
                {checkboxs}
                <button onClick={_ => {
                    console.log(this.state.chooseLoves)
                }}>获取选中的值</button>

                <select value={this.state.selVal} onChange={(e)=>{
                    this.setState({
                        selVal : e.target.value
                    })
                }}>
                    <option value="上海">上海</option>
                    <option value="深圳">深圳</option>
                    <option value="北京">北京</option>
                </select>
            </div>
        )
    }
}

