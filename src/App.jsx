import { useState } from 'react'
import './App.css'
import Layout from './components/layouts/Layout'
import HomePage from './pages/HomePage'
// import WorkCarousel from './components/sections/HomeSection/WorkCarousel'
import WorkVideoGrid from './components/sections/HomeSection/WorkVideoGrid'
import Services from './components/sections/HomeSection/Services'

function App() {

  return (
    <Layout>
      <HomePage/>
      {/* <Services/> */}
    </Layout>
  )
}

export default App
