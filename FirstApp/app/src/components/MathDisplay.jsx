export default function MathDisplay() {
    const message = "React 19 est génial!";
    const alert ="Attention!";
    return (
        <div>
            <h2>Math Operations</h2>
            <p>La somme de 5 et 7 = {5 + 7}</p>
            <p>{message.toUpperCase()} </p>
            <p>{ 2>0 ? "2 est sup á 0": "Erreur"}</p>
            <p>{message + alert}</p>
            
        </div>
    );
}