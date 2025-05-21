/* TODO - add your code to create a functional React component that renders a login form */
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './book.css'

function Login({authenticate}){
   const navigate =useNavigate()
   const login = async (formData) => {
    const email = formData.get("email")
    const password = formData.get("password")
    const user = {
        email,
        password,
    }
    try {
        const {data} = await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", user)
        console.log(data)
        window.localStorage.setItem("token", data.token)
        authenticate(window.localStorage.getItem("token"))
        navigate('/account')
    } catch (error) {
        console.log(error)
    }
  }


    return(
        <div>
            <div className='loginForm'>
             <form action={login} className='login'>
                <label>
                    email:
                    <br />
                    <input type="text" name='email' required/>
                </label>
                <br />
                <label>
                    password:
                    <br />
                    <input type="password" name="password" />
                </label>
                <br />
                <button>Login</button>
            </form>
            </div>
            
        </div>
    )
}
export default Login