import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Banner from './components/Banner.jsx'
import Roadmaps from './components/Roadmaps.jsx'

function App() {


  return (
    <>
   <Header/>
   <Banner/>
   <Roadmaps/>
   <Footer/>
    </>
  )
}

export default App
