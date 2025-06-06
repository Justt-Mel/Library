/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. 
You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import {Link} from "react-router-dom"
import './book.css'
function Navigations({user, authenticate}){
    return(
        <div>
           {
             <div className = "NavBar">
             <Link to ={'/'}> Home</Link>
             <Link to ={'/Books'}> Books</Link>
             <Link to={'/account'}>Account</Link> 
             <Link to={'/login'}>Login</Link>
             <Link to ={'/Register'}>Register</Link>
             </div>
           }
          </div>
    )
}
export default Navigations