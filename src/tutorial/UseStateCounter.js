import React , {useState} from 'react'

function UseStateCounter() {
    const[value,setValue] = useState(0);
    const complexIncrease = () => {
        setTimeout(()=> {
            setValue(value + 50);
            
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
