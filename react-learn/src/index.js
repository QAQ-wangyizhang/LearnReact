import React from 'react';
import ReactDOM from 'react-dom';
import Tick from "./components/Tick"

// let num = 10
// const timer = setInterval(() => {
//   num --;
//   if(num <= 0){
//     clearInterval(timer);
//   }
//   ReactDOM.render((<div>
//     <Tick number = {num}></Tick>
//   </div>),document.getElementById("root"))
// }, 1000);

ReactDOM.render((<div>
  <Tick number={10}></Tick>
</div>),document.getElementById("root"))

