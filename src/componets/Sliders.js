import { useEffect, useState } from "react"



export default function Slider( { images, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
        }, interval)
        return () => 
            clearInterval(timer);
    }, [currentIndex, images.length, interval]);

    return (
        <div>
            <img 
            src={images[currentIndex].url}
            alt={images[currentIndex].name}
            style={{width: "300px", height: "300px"}}
            />
        </div>
    )
}