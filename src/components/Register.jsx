/* TODO - add your code to create a functional React component that renders a registration form */
import './book.css'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'


function Register (){
    const navigate = useNavigate()

    const register = async (formData) => {
        const firstName = formData.get("FirstName")
        const password = formData.get("password")
        const lastName = formData.get("name")
        const email = formData.get("email")
        const user = {
            firstName,
            lastName,
            email,
            password
        }
        try {
            const {data}= await axios.post('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register',user)
            console.log(data)
            alert("thank you for registering")
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <div>
            <h1>Register Below</h1>
          <div className='reg'>
            <form action={register} className="registration">
                <label>
                    FirstName:
                    <br />
                    <input type="text"  name='FirstName'/>
                </label>
                <br />
                <label>
                    LastName:
                    <br />
                    <input type="text" name='LastName' />
                </label>
                <br />
                <label >
                    email: <br />
                    <input type="text" name='email'/>
                </label>
                <br />
                <label>
                    password: <br />
                    <input type="password"  name='password'/>
                </label>
                <br />
                <button>register</button>
            </form>
          </div>
        </div>
    )
}
export default Register