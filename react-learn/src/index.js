import React from 'react';
import ReactDOM from 'react-dom';
import TickControl from './components/TickControl'
// function handleClick(){
//   console.log("qaq")
// }
// ReactDOM.render(<button onClick={handleClick}>点击我</button>,document.getElementById("root"))
const tickControl = new TickControl();
console.log(tickControl);
ReactDOM.render((<TickControl></TickControl>),document.getElementById("root"))

