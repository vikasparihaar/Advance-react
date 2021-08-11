import React , {useState} from 'react'

function UseStateCounter() {
    const[value,setValue,prevState] = useState(0);
    const complexIncrease = () => {
        setTimeout(()=> {
            setValue((prevSate) =>
            {
                return prevState +2; //passing a function through set value of use state
            })
        
            //setValue(value + 50); //passing hard value through the set value of use state
            
        },5000);
    }
    return (
        <div>
            <section style={{margin: '4rem 0'}}>
                <h2>A Regular Counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick= {() => setValue(value+1)}> Increase</button>
                <button className='btn' onClick= {() => setValue(value-1)}>Decrease</button>
                <button className='btn' onClick= {() => setValue(0)}>Reset</button>
            </section>
            <section style={{margin: '4rem 0'}}>
                <h2>A more complex Counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick= {complexIncrease}> Increase later</button>
            </section>
            
        </div>
    )
}
export default UseStateCounter
