import React from "react";
import CounterBaby from "./counterBaby";
 function Counterchild(props) {
  console.log("counterchild:", props.value)
  return (
    <div>
     {/* <CounterBaby onClickIncrement={props.onClickIncrement} value={props.value} onClickDecrement={props.onClickDecrement}/> */}
     <CounterBaby value={props.value}/>
    </div>
  )
}
export default Counterchild;