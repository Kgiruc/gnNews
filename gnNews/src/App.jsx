import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Menu from "./components/Menu/Menu"
import MainContent from "./components/MainContent"
import MainNews from "./components/MainNews/MainNews"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {

  const [result, setResult] = useState("")

  return (
    <div className="App">
      <Header />
      <Menu />
      <main>
        <Routes>
          <Route path='/' element={<MainContent setResult={setResult}/>} />
          <Route path='/country/:countryId' element={<MainNews setResult={setResult}/>}/>
        </Routes>
      </main>
      <Footer result={result}/>
    </div>
  )
}

export default App
