import React from 'react'


export default class MyClassComp extends React.Component{
    constructor(props){
        super(props); //this.props = props;
        console.log(props,this.props === props)
    }
    render(){
    return <h1>类组件的内容 {this.props.num}</h1>
    }
}