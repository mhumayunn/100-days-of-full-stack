import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <>
    <Header />
    <Navbar />
    <ImageSlider />
    </>
  );
}
export default App;