import { useState } from 'react'
import './App.css'
import Layout from './components/layouts/Layout'
import HomePage from './pages/HomePage'
import WorkCarousel from './components/sections/HomeSection/WorkCarousel'

function App() {

  return (
    <Layout>
      {/* <HomePage/> */}
      <WorkCarousel/>
    </Layout>
  )
}

export default App
