import React, { Component } from 'react'
import Student from "./Student";

export class StudentList extends Component {
    render() {
      let s = this.props.stus.map(item => <Student key={item.id} {...item}></Student>)
        // console.log(this.props)
        return (
            <div>
                {s}
            </div>
        )
    }
}

export default StudentList
