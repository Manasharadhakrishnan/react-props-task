import React,{useState} from "react";
// import CounterBaby from "./propstask/counterBaby";
import CounterParent from "./propstask/Counterparent"


 function App() {
  
  // const[count, setCount] = useState(0);
   
  // const increment =()=>{
  //   setCount(count +1);
  // }
  // const decrement =()=>{
  //   setCount(count -1);
  // }
  const initialstate=[
    { name:"manasa", age:20  }, { name:"madhu", age:18 }, {name:"dhanam", age:22},{name:"visu",age:25},
    {name:"mahend", age:23}

  ]
  
  return (
    <div className="App">
      <CounterParent value={initialstate}/>

      {/* <CounterParent onClickIncrement={increment} value={count} onClickDecrement ={decrement}/> */}
      
    </div>
  );
}
export default App;