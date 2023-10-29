import { Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultNavbar from './Components/DefaultNavbar'
import Home from './Pages/Home'
import FooterWithSocialMediaIcons from './Components/FooterWithSocialMediaIcons'

function App() {

  return (
    <div>
      <DefaultNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={"About us"} />
        <Route path="/services" element={"Services"} />
        <Route path="/*" element={"404. Page not found"} />
      </Routes>
      <FooterWithSocialMediaIcons />
    </div>
  )
}
export default App
