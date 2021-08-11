import React, { useState } from 'react'

function UseStateBasics() {
    const [day, setDay] = useState("Today is bad day")
    const handleClick = () => {
        if(day==="Today is bad day"){
        setDay("Today is good day");
        }
        else{
            setDay("Today is bad day")
        }
    }
    return (
        <div>
            <>
                <h1>{day}</h1>
                <button type="button" className="btn" onClick={handleClick}>
                change title
                </button>
               
                
            </>
        </div >
    )
}

export default UseStateBasics