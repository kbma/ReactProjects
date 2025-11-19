//src/components/RotatingText.jsx
import { useEffect, useState } from "react";
 
export default function RotatingText() {
 
    const messages = ["React", "Vue", "Angular", "Svelte"]
    const [texts, setTexts] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTexts((prevTexts) => (prevTexts + 1) % messages.length);
        }, 1000);
        return () => clearInterval(interval); 
    }, []);
 
    return (
        <div>
            <h1>My skills</h1>
            <h2>{messages[texts]}</h2>
        </div>
    )
 
}
 

