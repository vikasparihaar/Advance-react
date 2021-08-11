import React from "react"
import './index.css';
import UseStateBasic from "./tutorial/UseStateBasic";
import UseStateErrorEx from "./tutorial/useStateErrorEx";
function App() {
  return (
    <div className='container'>
      <h2>Advance React</h2>
      <UseStateErrorEx/>
      <UseStateBasic />
    </div>

  );
}

export default App;
