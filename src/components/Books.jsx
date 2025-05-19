/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. 
Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { Link } from "react-router-dom"

function Books({allBooks}) {
    return (
        <div>
            <h1>Book inventory</h1>
            <div className ="BookContainer">
                {
                    allBooks.map((book) => {
                        return(
                          < div key={book.id} className="BookCard">
                              <h2>{book.title}</h2>
                              <Link to ={`/singleBook/${book.id}`}> 
                              <img src={book.coverimage} alt={book.name} />
                              </Link>
                              <h3>{book.author}</h3>
                              <p>{book.description}</p>
                          </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Books