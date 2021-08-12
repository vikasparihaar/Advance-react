import React from 'react'
import axios from 'axios'

function LearnJSON() {
    const handleClick = (b) => {
        const promise = axios.post("http://localhost:4000/posts", {
            name: "Tony"
        }, {
            headers: {
                ['content-type']: 'application/json'
            }
        }
        )
        promise.then(response => {
            console.log(response); //this is used to console log our response from the server
        })
        promise.catch(error => {
            console.error(error);  // this is used to console our error in case we get one
        })
        let c = b;
        console.log(c);
    }
    const getUsers = () => {
        axios.get("http://localhost:4000/posts").then(users => {     //we are getting the data from our jsons server and then storing it in user and then console the array of the objects.
            console.log(users);
        })
    }
    return (
        <>
            <h1>Random Title</h1>
            <button type="button" className="btn" onClick={handleClick}>
                post users
            </button>
            <button type="button" className="btn" onClick={getUsers}>
                get users
            </button>

        </>
    )
}

export default LearnJSON
