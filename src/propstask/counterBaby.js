import React from "react";



function CounterBaby(props) {
  
    let arr=props.value;
    console.log("arr:",arr)
    return (
        <div>
            
            <table className="table table-hover">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      
    </tr>
  </thead>
                <tbody>
                    {arr.map((items, index) => {
                        return (
                            <tr key={index}>
                                <td>{items.name}</td>
                                <td>{items.age}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
            {/* <div className="App">
     <button onClick={props.onClickIncrement}>+</button> 
     <p>{props.value}</p>
     <button  onClick={props.onClickDecrement}>-</button> 
       </div> */}
        </div>
    )
}
export default CounterBaby;
