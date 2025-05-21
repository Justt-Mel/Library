//imorted react functions
import { useState,useEffect } from "react"
import { Routes, Route} from "react-router-dom"
import axios from 'axios'
//imported componets
import Home from "./components/Home"
import Books from "./components/Books"
import SingleBook from "./components/SingleBook"
import Navigations from "./components/Navigations"
import Register from "./components/Register"
import Login from "./components/Login"
import Account from "./components/Account"


function App() {
  const [token, setToken] = useState(null)
  const [user,setUser] = useState({})
  const [allBooks, setAllBooks] = useState([])
  const [reservations , setReservations] = useState([])

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

const authenticate = async (token) => {
  try {
    if (!token) {
      throw Error("No Token Found");
    }
    const response = await axios.get(
      "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setToken(token)
    setUser(response.data);
    console.log(response.data)
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  const loggedInToken = window.localStorage.getItem("token")
  if(loggedInToken){
    authenticate(loggedInToken)
  }
},[user.id])

  return (
    <div>
      <Navigations/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Books" element = {<Books setAllBooks = {setAllBooks} allBooks = {allBooks} />}/>
          <Route path = "/singleBook/:id" element= {<SingleBook allBooks = {allBooks}/>}/>
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "/login" element = {<Login authenticate = {authenticate}/>}/>
          <Route path = "/account" element = {<Account user = {user}  setUser={setUser} />}/>
        </Routes>
    </div>
  )
}

export default App