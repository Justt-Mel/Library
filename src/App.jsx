import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"

function App() {
  const [token, setToken] = useState(null)

  return (
    <Routes>
      <Route path ="/" element={<Home/>}/>
    </Routes>
  )
}

export default App
