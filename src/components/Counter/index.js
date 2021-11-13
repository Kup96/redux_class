import React, {useState} from "react";
import {connect} from 'react-redux';
import ACTION_TYPES from "../../actions/actionsType";
const Counter = (props) => {
//   const [value, setValue] = useState(0);

    return (
        <>
            <h1>{props.value}</h1>
            <button onClick = {props.dec}>-</button>
            <button onClick = {props.inc}>+</button>
        </>
    );
};
const mapStateToProps = (state) => {
    const {value} = state;
    return {
        value,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        dec: () => dispatch({ type: ACTION_TYPES.DECREMENT }),
        inc: () => dispatch({ type: ACTION_TYPES.INCREMENT }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);