import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [showModal, setShowModal] = useState(false)
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  const handleToggleModal = () => {
  
setShowModal(!showModal)
  }

  // useEffect(()=>{
  //   async function fetchApi() {
  //     const url = 'https://api.nasa.gov/planetary/apod' + 
  //     `?api_key=${}`
  //   }() => {
      
  //   }
  // },[])
  return (
    <>
    <Main/>
    {showModal  && (
      <SideBar handleToggleModal={handleToggleModal} />
      )}
    <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
