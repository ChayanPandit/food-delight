import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllRestaurants from './pages/restaurant/AllRestaurants'
import Restaurant from './pages/restaurant/Restaurant'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/restaurants" element={<AllRestaurants/>} /> 
          <Route path="/restaurant/:id" element={<Restaurant/>} />          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}


export default App
