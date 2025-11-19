import { useState } from "react";
function LiveInput() {
    const [inputValue, setInputValue] = useState("");
    function handleChange(event) {
        setInputValue(event.target.value);
        console.log(event.target.value);
    }
    return (
        <div>
            <h2>Live Input Component</h2>
            <input onChange={handleChange} type="text" placeholder="Type something..." />
            <p>{inputValue}</p>
        </div>
    );
}
export default LiveInput;
