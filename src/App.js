import React, { useReducer,useState} from 'react';
import './Style.css';
import {reducer} from "./reducer"

function App() {
  // var stateInitialValue = {
  //   count: 0,
  // };
const [values1,setValues]=React.useState({
  count:0,
  num1:0,
  num2:0
})

  
  
  const [state, dispatch] = useReducer(reducer, values1);
  console.log(state);

  const handleonchange=(event)=>{ 

    
  setValues(...state,state.target.name=(event.target.value))
 
  
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
  };


  return (
    <div className="App">
      <h3> Calculator Using Use Reducer </h3>
    <form onSubmit={(event) => handleSubmit(event)}>
      Input value1 <input type="text" onChange={(event)=>{setValues(state.num1=(event.target.value))}} name="num1" /><br/><br/>
      Input value2<input type="text" onChange={(event)=>{setValues(state.num2=(event.target.value))}} name="num2"/><br/><br/>
      
      <button onClick={() => dispatch({ type: 'Addition'})}>
        
        ADDITION
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: 'SUB',payload:{num1:state.num1, num2:state.num2} })}>
       
        SUBTRATION
      </button>{' '}
      
      <button onClick={() => dispatch({ type: 'MUL' })}>
        {' '}
        MULTIPLICATION{' '}
      </button>{' '}
      
      <button onClick={() => dispatch({ type: 'DIV' })}>
        {' '}
        DIVISION{' '}
      </button>{' '}
      <button type="reset" onClick={() => dispatch({ type: 'RESET' })}> Reset </button>{' '}
      <br /> <br /><br /> <br />
      Output: {state.count} <br /> <br />
      &nbsp;
</form>
     
    </div>
  );
}

export default App;