import React , {useState} from 'react'
//we want to have two input fields
//we want to have a button 
//one of the input field should accept username
//email
//we want to accept the data and store it somewhere in a variable
//initital state will be empty


function Forms() {
    const handleSubmit =(e) => {
        e.preventDefault(); //this is used to prevent default behaviour of the browser
        console.log("hello India")
    }
    return (
        <div>
            <article>
                <form className='form' onSubmit ={handleSubmit}>
                    <div className='form-control'>
                        <lable htmlfor="firstName"> Name:</lable>
                        <input type="text" id="firstName" name="firstname"></input>
                    </div>
                    <div className='form-control'>
                        <lable htmlFor="email"> Email:</lable>
                        <input type="text" id="email" name="email"></input>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </article>
           
            
        </div>
    )
}

export default Forms
