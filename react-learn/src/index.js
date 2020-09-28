import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from "./MyFuncComp";
import MyClassComp from "./MyClassComp"

// 当成react元素
ReactDOM.render((<div>
  <MyFuncComp num={4}></MyFuncComp>
  {/* 组件不能更改自身的属性 */}
  {/* React中 数据属于谁 谁有权利改动 */}
  {/* React中的数据自上而下流动的 单向数据流 */}
  <MyClassComp num={4}></MyClassComp>
  <MyClassComp num={4}></MyClassComp>
  <MyClassComp num={4}></MyClassComp>
</div>),document.getElementById("root"))
