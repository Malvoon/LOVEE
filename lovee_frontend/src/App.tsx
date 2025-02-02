import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Profiles from './components/Profiles/Profiles'

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header isHomePage={true} />
              <Home />
            </>} />
          <Route path="/profiles" element={
            <>
              <Header />
              <Profiles />
            </>} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
