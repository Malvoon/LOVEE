import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Profiles from './components/Profiles/Profiles'
import Login from './components/Login/Login'

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={
            <>
              <Header />
              <Profiles />
            </>} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
