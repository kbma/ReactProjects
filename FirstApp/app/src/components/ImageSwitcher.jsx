import { useState } from 'react';
export default function ImageSwitcher() {

    const Image1="https://loremflickr.com/380/320/cat";
    const Image2="https://loremflickr.com/380/320/dog";
    const Image3="https://loremflickr.com/380/320/parrot";
    const images = [Image1, Image2, Image3];    
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleChangeImage = () => {

        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        console.log(currentIndex);
    }    
    return (
        <>
            <h2>Image Switcher</h2>
            <img src={images[currentIndex]  }  />
            <button onClick={handleChangeImage}>Changer l'image</button>             
        </>
    );  
}