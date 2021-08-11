import React, { useState } from 'react'

function UseStateErrorEx() {
    let title = "random title"; //its initial value is random title
    const handleClick = (b) => {
        let a=b;
        console.log(title);
        title = "My name is vikas";
    }
    return (<React.Fragment>
        <h2>{title}</h2>
        <button type="button" className="btn" onClick={handleClick(200)}>
            change title
        </button>
    </React.Fragment>

    );
};

export default UseStateErrorEx