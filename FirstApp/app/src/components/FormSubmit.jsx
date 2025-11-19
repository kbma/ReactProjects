// src/components/FormSubmit.jsx
import { useState } from "react";
function FormSubmit() {
 
    const [text, setData] = useState(null);
    
    function handleSubmit(event) {
        event.preventDefault();
        const value = event.target.textInput.value;
        setData(value);
        console.log("Form submitted with data:", value);
    }
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="textInput" placeholder="Enter text" />
                <button type="submit">Submit</button>
            </form>
            <p>{text}</p>
 
        </div>
    );
}
export default FormSubmit;
 
