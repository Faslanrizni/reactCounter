/*life cycle ,status mangment in react*/
/*
1. class base component
2. function base component
* */
import './App.css';
import React, {useState} from "react";
import react from "@vitejs/plugin-react";

/*
/!*class base component, states management*!/
class Counter extends React.Component<{}, {count:number}>{
    constructor(props:{}) {
        super(props);
        this.state={
            count:0
        }
    }


    increment=()=>{
        this.setState((lastState)=>({
            count:lastState.count+1
        }))
    }
    Decrement=()=>{
        this.setState((lastState)=>({
            count:lastState.count-1
        }))
    }

    render() {
        return (
            <>
                <p>Counter: {this.state.count}</p>
                <button onClick={this.increment}>INCREMENT</button> |
                <button onClick={this.Decrement}>Decrement</button>
            </>
        )
    }
}
*/

const Counter: React.FC=()=>{
    /* function base approach, useState*/
    const[count,setCount] = useState<number>(0);
    return(
        <>
            <p>Counter: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button> |
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
}

/*function App() {
    return(
        <>
            <p>Counter: 0</p>
            <button>Increment</button> |
            <button>Decrement</button>
        </>
    )


}*/

export default Counter;
