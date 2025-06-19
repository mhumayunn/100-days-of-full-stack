import { useState, useEffect } from 'react'

const images = [
    "https://i.pinimg.com/736x/42/3b/b6/423bb6b27e49523c53e533e2c6bd96d8.jpg",
    "https://i.pinimg.com/736x/80/07/5b/80075bd29b6b2580cffedb1a41bb5795.jpg",
    "https://www.shutterstock.com/image-photo/diamond-jewelry-ring-earrings-pendant-600nw-1582235023.jpg",
  ]

function ImageSlider() {
    //a react hook(useState), that gives iinddex of current image being shown
        //setCurrentInex is the function that changes which image shows next
        const [currentIndex,setCurrentIndex] =useState(0)

        //useEffect is another react hook - which lets you run sie effects- setting up a timer.
        useEffect (() => {
            const interval = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % images.length)
            },5000) //every 5 seconds)
            return () => clearInterval(interval) //cleanup
        }, [])

    return (
        <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-full object-cover"
        />
  
        <div className="absolute top-10 right-10 bg-black bg-opacity-50 text-white px-6 py-4 rounded-lg">
          <h2 className="text-3xl font-semibold">Maha's Gems</h2>
          <p className="text-md">An accessory, now your bestfriend 💍</p>
        </div>
      </div>
    );
}
export default ImageSlider;