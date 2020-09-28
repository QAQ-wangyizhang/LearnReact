import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from "./components/StudentList"

const appkey = "QAQwangyizhang_1585626591787";
async function fetchAllStudnets(){
  const stus = await fetch("http://open.duyiedu.com/api/student/findAll?appkey=" + appkey)
                        .then(res => res.json());
  return stus;
}

async function render(){
  ReactDOM.render((<h3>正在加载中...</h3>),document.getElementById("root"))
  const s = await fetchAllStudnets();
  // console.log(s.data);
  ReactDOM.render((<div>
    <StudentList stus={s.data}></StudentList>
  </div>),document.getElementById("root"))
}
// let s = fetchAllStudnets().then(res => res);
// console.log(s);
render();

