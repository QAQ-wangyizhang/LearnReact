import React from 'react';
import ReactDOM from 'react-dom';
import src1 from "./assets/1.jpg";
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";
import "./index.css"
let index = 0;
const imgList = [src1,src2,src3]
let timer = null;
const container = document.getElementById("root");
function render(){
  ReactDOM.render((<img src={imgList[index]} alt="" />),container);
}
function start(){
  stop();
 timer = setInterval(() => {
    index = (index + 1) % 3;
    render();
  }, 1000);
}

function stop(){
  clearInterval(timer);
}

container.onmouseenter = function(){
  stop();
  console.log("1")
}
container.onmouseleave = function(){
  stop();
  start();
}

render();

start();