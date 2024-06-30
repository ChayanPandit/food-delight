import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllRestaurants from './pages/restaurant/AllRestaurants'
import Restaurant from './pages/restaurant/Restaurant'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
import Signup from './pages/user/Signup'
import Signin from './pages/user/Signin'

function App() {
  const url = window.location.pathname;
  return (
    <>
      <BrowserRouter>
      {(url != "/signin" && url != "/signup") ? <Header /> : null}{" "}
        <Routes>
          <Route path="/" element={<AllRestaurants/>} /> 
          <Route path="/restaurant/:id" element={<Restaurant/>} /> 
          <Route path="/about" element={<About/>} /> 
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/signin" element={<Signin/>} /> 
          <Route path="/signup" element={<Signup/>} /> 
        </Routes>
        {(url != "/signin" && url != "/signup") ? <Footer /> : null}{" "}
      </BrowserRouter>
    </>
  )
}


export default App
