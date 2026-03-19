import { Outlet } from "react-router-dom"
import NavBar from "../common/NavBar"
import Footer from "../common/Footer"

const PageLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default PageLayout