/* TODO - add your code to create a functional React component that 
renders account details for alogged in user. 
Fetch the account data from the provided API. 
You may consider conditionally rendering a message for other users that prompts 
them to log in or create an account.  */
import {  useNavigate } from "react-router-dom"

function Account ( {user, setUser} ){
    const navigate = useNavigate()

        const logOut = () => {
        window.localStorage.removeItem("token")
        setUser({})
        navigate('/login')
    }

    return (
        <div>
            <h1>hello {user.firstname}</h1>
 
            <button onClick={() => logOut()}>LogOut</button>
        </div>
    )
}
export default Account