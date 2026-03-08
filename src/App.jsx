import { Route, Routes } from "react-router-dom"
import PageLayout from "./components/PageLayout"
import Home from "./components/pages/Home"
import HowItWork from "./components/pages/HowItWork"
import Services from "./components/pages/Services"
import Contact from "./components/pages/Contact"


function App() {
  return (
   <Routes>
    <Route path="/" element={<PageLayout/>}>
     <Route index element={<Home/>}/>
     <Route path="/how-it-works"element={<HowItWork/>} />
     <Route path="/services"element={<Services/>} />
     <Route path="/contact"element={<Contact/>} />
    </Route>
   </Routes>
  )

}

export default App
