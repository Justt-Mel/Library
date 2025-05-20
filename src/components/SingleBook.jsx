/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API.
 You may consider conditionally rendering a 'Checkout' button for logged in users. */

 import { useParams } from "react-router-dom"
 function SingleBook({ allBooks }){

const params= useParams()
const bookId = params.id * 1

const book =  allBooks.find((book) => book.id === bookId);

let bookStatus = "";
if ( book.available === false) {
    bookStatus = "checked out";
}
else{
    bookStatus = "available"
}

    return(
        <div>
            <h1>Details of the book you selected</h1>
            <div className="BookCard">
                {
                    book ? (
                        <div className="BookInfo">
                            <h1>{book.title}</h1>
                            <h2>{book.author}</h2>
                            <img src={book.coverimage} alt= {book.title} />
                            <p>{book.description}</p>
                            <h3>{bookStatus}</h3>
                        </div>
                    ):
                    ( 
                        <h2>loading</h2>
                    )
                }
      
            </div>
        </div>
    )
 }
 export default SingleBook