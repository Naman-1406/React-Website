import React from 'react'
import Header from './assets/Layout/Header'
import '../src/assets/css/style.css'

import 'bootstrap/dist/css/bootstrap.css'
import Footer from './assets/Layout/Footer'
import Home from './pages/Home'



const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App