import  { useState } from 'react';
export default function ClickButton(props) {

    const [txt, setTxt] = useState(props.txt);

    function handleClick() {
        //alert("Bouton cliqué !");
        //console.log("Bouton cliqué !");
        setTxt("Merci !")
    }   
    return (
        <div>
            <button onMouseOver={handleClick}>{txt}</button>
        </div>
    )
}