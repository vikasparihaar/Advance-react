  
import React, { useState } from 'react'

function UseStateObject() {
    const [person, setPerson] = useState({
        name: "vikas kumar",
        age: 22,
        message: "I love Pizza",
    });
    const[name,setname]= useState("Tony")
    const[age,setAge]= useState(23)
    const[message,setMesasage] = useState("I am gonna GOD of THUNDER")

    const changeMessage = () => {
        setPerson({...person,message:"ni msg"})
        setMesasage("I think I am not that much holy")
    }
    return (
        <div>
            <>
                <h3>{name}</h3>
                <h3>{age}</h3>
                <h3>{message}</h3>
                <button className="btn" onClick={changeMessage}>Change my Message</button>
            </>

        </div>
    )
}

export default UseStateObject