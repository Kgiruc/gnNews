import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Menu from "./components/Menu/Menu"
import MainContent from "./components/MainContent"
import MainNews from "./components/MainNews/MainNews"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {

  return (
    <div className="App">
      <Header />
      <Menu />
      <main>
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/country/:countryId' element={<MainNews/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
