import { Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultNavbar from './Components/DefaultNavbar'
import Home from './Pages/Home'
import FooterWithSocialMediaIcons from './Components/FooterWithSocialMediaIcons'
import Pricing from './Pages/Pricing'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Access from './Pages/Access'

function App() {

  return (
    <div>
      <DefaultNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/access" element={<Access />} />
        <Route path="/*" element={"404. Page not found"} />
      </Routes>
      <FooterWithSocialMediaIcons />
    </div>
  )
}
export default App
