//imorted react functions
import { useState,useEffect } from "react"
import { Routes, Route} from "react-router-dom"
import axios from 'axios'
//imported componets
import Home from "./components/Home"
import Books from "./components/Books"
import SingleBook from "./components/SingleBook"
import Navigations from "./components/Navigations"


function App() {
  const [token, setToken] = useState(null)
 const [allBooks, setAllBooks] = useState([])

 useEffect( ()=>{
  const FetchBooks = async ()=>{
    try {
      const {data} =await axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
      console.log(data)
      setAllBooks(data)
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }
  FetchBooks()
},[])

  return (
    <div>
      <Navigations/>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path = "/Books" element = {<Books setAllBooks={setAllBooks} allBooks={allBooks} />}/>
          <Route path="/singleBook/:id" element={<SingleBook allBooks = {allBooks}/>}/>
        </Routes>
    </div>
  )
}

export default App
