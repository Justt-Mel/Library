/* TODO - add your code to create a functional React component that 
renders account details for alogged in user. 
Fetch the account data from the provided API. 
You may consider conditionally rendering a message for other users that prompts 
them to log in or create an account.  */
function Account ( {user} ){
    return (
        <div>
            <h1>hello {user.FirstName}</h1>
        </div>
    )
}
export default Account