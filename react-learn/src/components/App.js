// import Modal from "./common/Modal"
// import React, { Component } from 'react'

// export default class App extends Component {
//     state = {
//         isShowModal: false
//     }
//     showModal = () => {
//         this.setState({
//             isShowModal: true
//         })
//     }
//     hideModal = () => {
//         this.setState({
//             isShowModal: false
//         })
//     }
//     render() {
//         return (
//             <div className="app">
//                 {this.state.isShowModal ? (<Modal onClose={this.hideModal} bg={"rgba(255,0,0,0.3)"}>
//                     <h1>QAQ</h1>
//                     <button onClick={this.hideModal}>隐藏蒙层</button>
//                 </Modal>) : null}
//             <button onClick={this.showModal}>显示蒙层</button>
//             </div>)
//     }
// }
import React, { Component } from 'react'
import ThreeLayout from "./common/ThreeLayout"
import "./index.css"
export default class App extends Component {
    
    render() {
        return (
            <div className="app">
                <ThreeLayout  left={
                    <h1>左侧内容</h1>
                } right={
                    <h1>右侧内容</h1>
                }>
                
                    <h1>主要内容</h1>
                    <p>
                        三栏布局
                    </p>
                </ThreeLayout>
            </div>
        )
    }
}



