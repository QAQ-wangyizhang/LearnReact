import React from 'react';
import ReactDOM from 'react-dom';
const a = 1234,b =4321;
const obj = <span>这是一个元素对象</span>;
const arr = [1,2,3,4,5];
const numbers = new Array(30);
numbers.fill(0);
let lis = numbers.map((item,index) => {
return (<li key={index}>{index}</li>)
})
const h1 = (<div>
  {/* 以下不会产生任何输出 */}
  {null}
  {undefined}
  {false}
  <h1>{a} * {b} = {a * b}</h1>
  {/* 可以放置react元素对象 普通对象放不进去*/}
  {/*  */}
  {obj}
  <p>
    {arr}
  </p>
  <ul>
  {lis}
  </ul>
</div>);
console.log(h1)

const url = "https://tse1-mm.cn.bing.net/th/id/OIP.A62LEA8sxZN0FcCnWDFDIQHaFj?w=250&h=187&c=7&o=5&dpr=1.25&pid=1.7";
const cls = "image"
const img = (
  <div>
    <img src={url} alt="1" className={cls} style={{
      marginLeft : "50px",
      width:"200px"
    }}></img>
  </div>
)
console.log(img);

let num = 0;
setInterval(()=>{
  num++;
  const p = (
  <p>{num}</p>
  )
  ReactDOM.render(p,
    document.getElementById('root')
  );
},1000)



