/* TODO - add your code to create a functional React component that renders a registration form */
import './book.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Register (){
    const navigate = useNavigate()

    const register = async (formData) => {
        const firstname = formData.get("firstname")
        const lastname = formData.get("lastname")
        const email = formData.get("email")
        const password = formData.get("password")
        const user = {
            firstname,
            lastname,
            email,
            password
        }
        try {
            const {data} = await axios.post('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register',user)
            console.log(data)
            alert("Thank You For Registering")
            navigate('/login')
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
                    firstname:<br />
                    <input type = "text"  name = "firstname" required/>
                </label>
                <br />
                <label>
                    lastname:<br />
                    <input type = "text" name = "lastname" required/>
                </label>
                <br />
                <label >
                    email: <br />
                    <input type = "email" name = "email" required/>
                </label>
                <br />
                <label>
                    password: <br />
                    <input type = "password"  name = "password" required/>
                </label>
                <br />
                <button>register</button>
            </form>
          </div>
        </div>
    )
}
export default Register