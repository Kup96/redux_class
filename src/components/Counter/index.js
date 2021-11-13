import React, {useState} from "react";


const Counter = (props) => {
//   const [value, setValue] = useState(0);

    return (
        <>
            <h1>{value}</h1>
            <button onClick = {dec}>-</button>
            <button onClick = {inc}>+</button>
        </>
    )
};

export default Counter;