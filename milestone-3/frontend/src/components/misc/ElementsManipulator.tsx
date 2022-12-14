import React, { ChangeEvent } from "react";

export default function ElementsManipulator(props: {
        placeholder?: string,
        buttonText: string,
        onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void,
        onButtonClick: (item: string) => void}) {
    
    function define(val:any, valDefault:any) {
        return val !== undefined ? val : valDefault;
    }

    const inputPlaceholderText = define(props.placeholder, "Type Something");
    const buttonText = props.buttonText;
    
    const onInputChange = define(props.onInputChange, () => {});
    const onButtonClick = props.onButtonClick;
    
    const [newVal, setNewVal] = React.useState('');

    return (
        <div className="elements-manipulator">
            <input 
              placeholder={inputPlaceholderText}
              value={newVal}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setNewVal(event.target.value);
                onInputChange(event);
              }}
            />
            <button onClick={() => onButtonClick(newVal)}>{buttonText}</button>
        </div>
    );
}