import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        loginId: '',
        password: '',
        sex: 0,
        loves: [
            { value: "football", text: "足球", id: 1 },
            { value: "playgame", text: "打游戏", id: 2 },
            { value: "movie", text: "看电影", id: 3 },
            { value: "music", text: "听音乐", id: 4 },
            { value: "other", text: "其他", id: 5 },
        ],
        chooseLoves: ["other"]
    }
    handleChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        this.setState({
            [name]: val
        })
    }
    getCheckboxs = () => {
        const lv = this.state.loves.map(item => (<label key={item.id}>
            <input type="checkbox" name="" id=""
             value={item.value} 
             checked = {this.state.chooseLoves.includes(item.value)}
             onChange={(e)=>{
                if(e.target.checked){
                    this.setState({
                        chooseLoves : [...this.state.chooseLoves,item.value]
                    })
                }else{
                    this.setState({
                        chooseLoves : this.state.chooseLoves.filter(fl => fl !== item.value)
                    })
                }
             }}
             />
            {item.text}
        </label>))
        return lv;
    }
    render() {
        const cb = this.getCheckboxs();
        return (
            <div>
                <p>
                    <input name="loginId" value={this.state.loginId} type="text" onChange={this.handleChange} />
                </p>
                <p>
                    <input name="password" value={this.state.password} type="password" onChange={this.handleChange} />
                </p>
                <p>
                    <label>
                        <input type="radio" name="sex"
                            value="male"
                            onChange={this.handleChange}
                            checked={this.state.sex === "male"}

                        />男
                    </label>
                    <label>
                        <input type="radio" name="sex"
                            value="female"
                            onChange={this.handleChange}
                            checked={this.state.sex === "female"}
                        />女
                    </label>
                </p>
                <p>
                    {cb}
                </p>
                <p>
                    <button onClick={_ => {
                        console.log(this.state)
                    }}>获取元素值</button>
                </p>
            </div>
        )
    }
}
