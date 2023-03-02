import React from "react";
import Counterchild from "./counterchild";

 function CounterParent( props) {

  console.log(props.value)
  return (
  //  <Counterchild onClickIncrement={props.onClickIncrement} value={props.value} onClickDecrement={props.onClickDecrement}/>
  <Counterchild  value={props.value}/>
  )
}
export default CounterParent;