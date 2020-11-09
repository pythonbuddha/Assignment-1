import React from "react";

const TextInput = (props) => {
    
    const style = {
        border: '2px solid red'
    };

    return (
            <input 
            type="text" 
            style={style}
            onChange={props.changed}
            value={props.currentName}/>
    );
};

export default TextInput;