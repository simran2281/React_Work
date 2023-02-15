
// import { render } from '@testing-library/react';
// import { useState } from 'react';
// import './App.css';
 


//function App(){
//   const students = 
//   [
//     ["Name","Subject","Marks","cgpa"], 
//     ["Adfar","Coding",100,10,["html","css","js"]], 
//     ["Nipun","React",90,9,["react","c","c++"]], 
//     ["Riva","JS",80,8,["JS","java","python"]], 
//     ["Animesh","Node",70,7,["react","c","c++"]] 
//   ] 

//   return (
//     <table>
//       <thead>
//         <tr>
//           {students[0].map((item, index) => (
//             <th key={index}>{item}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {students.slice(1).map((student, index) => (
//           <tr key={index}>
//             {student.map((item, index) => (
//               <td key={index}>{item}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }


//Render [[1,2,3,4],[5,6,7,8],[9,10,11,12]] array of arrays.

// function App() {
//   const items =
//   [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
//   ];

//    return items.map((item) => <li>{item}</li>);
  // return (
  //   <ol>
  //     {items.map(item => (
  //       <li key={item}>{item}</li>
  //     ))}
  //   </ol>
  // );
//} 


// function App(){
//   const numbers = 
//   [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
//   ];
//   return
//   numbers.map((number)=> 
//   <li>
//     {number}
//   </li>
//   );
// }
// function App(){
// super()
// this.state = {
//   count = 0,
// }
// addOne=()=>{
//   this.setState({count:this.state.count + 1})
// }
// minusOne=()=>{
//   this.setState({count:this.state.count - 1})
// }

// subTen=()=>{
//   this.setState({count:this.state.count + 10})
// }

// addTen=()=>{
//   this.setState({count:this.state.count + 10})
// }

// render() {
//   return(
//     <div>
//       <h1>{this.state.count}</h1>
//       <button onClick={this.addOne}>Add</button>
//       <button onClick={this.minusOne}>Sub</button>
//       <button onClick={this.subTen}>SubTen</button>
//       <button onClick={this.addTen}>addTen</button>
//     </div>
//   )
// }
// }

// export default function App(){
//   const [count,setCount] = useState(0)
//   const Like =()=>{
//     setCount(count + 1)
//   }
//   const Unlike =()=>{
//     setCount(count - 1)
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>{setCount(count + 1)}}>Like</button>
//       <button onClick={()=>{setCount(count - 1)}}>Unlike</button>
//     </div>
//   )
// }



// import React from 'react';
// import Message from './text/Message';
// export default function App(){
//   return(
//     <div>
//       <Message/>
//     </div>
//   )
// }
// exam38
// test@38


// import React from 'react';

// export default class App extends Component{
//   constructor(props){
//     this.name = React.createRef()
//     this.password = React.createRef()
//   }
//   submitHandler(event){
//     event.preventDefault()
//     console.log(this.name.current)
//   }
//   render(){
//     return(
//       <div>
//         <form onSubmit={((event)=>{this.submitHandler(event)})}>
//           <h1>Uncontrolled Components</h1>
//           <input type ="text" placeholder='Enter name' ref={this.name}/><br></br>
//           <input type ="password" placholder='Enter password' ref={this.password}/><br></br>
//           <button type = "submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// answer of css module question, 

// import React from 'react';
// import styles from " ./component1.css';
// class component1 extends React . Component {

// render () {
// return (
// <button className={styles. button}>
// Click Me
// </button>

// export default component1;
// import React from 'react';
// import styles from ' ./component2.css';
// class component2 extends React. Component {

// render () {
// return (
// <button className={styles. button}>
// Click Me
// </button>

// export default component2;



// import React, { Component } from 'react'
// import "./App.css"

// export default class App extends Component {
//     state ={
//       name: "Simran"
//     };
//     constructor(props) {
//       super(props)
//   }
//   name1 = () =>{
//     this.setState({
//       name: 'Jungkook'
//     });
//   };

//   name2 = () =>{
//     this.setState({
//       name: 'Taehung'
//     });
//   };

//   name3 = () =>{
//     this.setState({
//       name: 'Jimin'
//     });
//   };

//   name4 = () =>{
//     this.setState({
//       name: 'Jin'
//     });
//   };

//   name5 = () =>{
//     this.setState({
//       name: 'Rm'
//     });
//   };

//   name6 = () =>{
//     this.setState({
//       name: 'J-hope'
//     });
//   };


//    render() {
//     const state = this.state
//     return (
//     <div>
//       <h1>{state.name}</h1>
//       <button onClick={this.name1}>Name1</button>
//       <button onClick={this.name2}>Name2</button>
//       <button onClick={this.name3}>Name3</button>
//       <button onClick={this.name4}>Name4</button>
//       <button onClick={this.name5}>Name5</button>
//       <button onClick={this.name6}>Name6</button>
//     </div>
//     )
//    }
//   }


// useEffect(()=>
// { 
//   setInterval(()=>
//   { 
//     console.log("Hello Adfar"); 
//   },3000) 
// },
// [count]) 

// import React, { useState, useEffect } from 'react'

// export default function App() {
//   const [count, setCount] = useState(0)
//   const [number, setNumber] = useState(0)
  // useEffect(() => {
  //   console.log("effect called")
  // },[count])
  // useEffect(()=>{
  //   console.log("1")
  //   const eventhandler = ()=>console.log("hii simran")
  //   document.addEventListener("click",eventhandler)

  //   return ()=>{
  //     console.log("2")
  //     document.removeEventListener("click",eventhandler)
  //   }
  // })

  // useEffect(()=>{
  //   setInterval(()=>{
  //     console.log("Hello simran")
  //   },[3000])

  // })
//   useEffect(()=>{ 
//     setInterval(()=>{ 
//       console.log("Hello Adfar");
//       document.addEventListener("click",setInterval)
      
//     return ()=>{
//       document.removeEventListener("click",setInterval)
//     }
//     },3000) },[count])
//   return (
//     <div>
//       <h1>{count}</h1>
//     <h1>{number}</h1>
//     <button onClick={()=>{setCount(count+1)}}>click me</button>
//     <button onClick={()=>{setNumber(number+1)}}>click me</button>
//     </div>
//   )
// }
// import React from 'react'
// import { useState } from 'react'

 
// export default function App() {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState(0);
 
//   const colorChange =()=>{
//     const clr = color +1;
//     if(color[clr])
//       setColor(clr)
//     } 

//   return (
//     <div>
//       <h1 onChange={()=>{setColor(onchange)}}>React</h1><br/>
//       <h1 onChange={()=>{setColor(onchange)}}>{count}</h1><br/>
//       <button onClick={()=>{setCount(count+1)}}>Increment</button>
//       <button onClick={()=>{setCount(count-1)}}>Decrement</button>
//       </div>
//   );
// }

// import React from 'react'
// import { useState } from 'react'
// import './App.css'; 

 
// export default function App(){
//     const [ count, setCount] = useState(0);

//     function increment() {
//       setCount(nextCount => nextCount + 1);
//     }

//     function decrement() {
//       if(count !== 0) {
//         setCount(prevCount => prevCount - 1);
//       }
//     }
//     return (
//       <div className='wrap'>
//         <h1 className='count' style={{color : count > 4 ?  'blue' : 'green' }}>{count}</h1>
//         <div className='btn-wrap'>
//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//         </div>
//       </div>
//     )
//   }


import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let counterColor = "green";
  if (count >= 5 && count <= 9) {
    counterColor = "blue";
  } else if (count === 10) {
    counterColor = "red";
  }

  return (
    <div className="row align-items-center vh-100">
    <div className="col-6 mx-auto">
    <div class="card shadow border">
   <div className="card">
     <div className="card-body">
      <h1 style={{ color: counterColor , textAlign:'center', fontSize:'2rem'}}>{count}</h1>
      <button style={{textAlign:"center"}} className="btn btn-primary" onClick={handleIncrement}>Increment</button>
      <button className="btn btn-secondary" style={{textAlign:"center"}} onClick={handleDecrement}>Decrement</button>
    </div>
    </div>
    </div>
    </div>
    </div>
   
  );
}

export default Counter;