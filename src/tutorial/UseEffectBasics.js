import React ,{useState,useEffect} from 'react'

 function UseEffectBasics() {
     const [value,setValue]=useState(0);
     useEffect(() => {
         console.log('call useEffect');
         document.title = `new iphone(${value})`;
     });
     console.log('render component')
    return (
        <>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value+1)}>
            click me
        </button>
            
        </>
    )
}
export default UseEffectBasics

 