import { useState } from 'react';

export default function TextChanger() {

    const [text, setText] = useState("Bonjour");

    const handleTextChange = () => {
        setText(text === "Bonjour" ? "Au revoir" : "Bonjour");
    }

    return (
        <>
            <h2>Text Changer</h2>
            <p>{text}</p>
            <button onClick={handleTextChange}>Change Text</button>
        </>

    );


}
