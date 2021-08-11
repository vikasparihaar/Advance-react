import React from 'react';
import './index.css';
import UseStateObject from './tutorial/UseStateObject';
import UseStateCounter from './tutorial/UseStateCounter';
//import UseStateArray from './tutorial/UseStateArray';
//import UseStateErrorEx from './tutorial/useStateErrorEx';
//import UseStateBasics from './tutorial/UseStateBasic';


function App() {
  return ( <div className="container">
  <h2>Advance react JS</h2>
  {/* <UseStateBasics/> */}
    {/* <UseStateArray/> */}
     <UseStateObject />
     <UseStateCounter />
  {/* <UseStateErrorEx/> */}
  </div>
  );
}

export default App;