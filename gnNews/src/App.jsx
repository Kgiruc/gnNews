import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Menu from "./components/Menu/Menu"
import MainContent from "./components/MainContent"
import MainNews from "./components/MainNews/MainNews"
import Footer from "./components/Footer"
import ErrorPage from "./components/ErrorPage"

function App() {

  return (
    <div className="App">
      <Header />
      <Menu />
      <main>
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/country/:countryId' element={<MainNews/>}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
