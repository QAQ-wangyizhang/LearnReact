import React, {
    Component
} from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }
    handleClick = () => {
        // this.setState({
        //     num : this.state.num + 1 
        // },()=>{
        //     // 改变完成后 触发的回调函数 运行在render之后
        //     console.log(this.state.num)
        // })
        // // console.log(this.state.num);// 还没有重新渲染 说明当前状态仍然没有改变

        // cur 保存当前的最新状态 进行改变
        this.setState(cur => {
            return {
                num: cur.num + 1
            }
        })

        this.setState(cur =>
            ({
                num: cur.num + 1
            })
        )
        this.setState(cur =>
            ({
                num: cur.num + 1
            })
        )



    }
    render() {
        console.log("render")
        return (<div>
            <p> {
                this.state.num
            } </p>
            <button onClick={
                this.handleClick
            } > + </button>
        </div>
        )
    }
}