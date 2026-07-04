import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./actions";

const BookForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isbn, setIsbn] = useState("");

    const handleAddBook = () => {

        if(title === "" || author === "" || isbn === ""){
            return;
        }

        dispatch(addBook({
            title,
            author,
            isbn
        }));

        setTitle("");
        setAuthor("");
        setIsbn("");

    }

    return (

        <div>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
            />

            <input
                type="text"
                placeholder="ISBN"
                value={isbn}
                onChange={(e)=>setIsbn(e.target.value)}
            />

            <button onClick={handleAddBook}>
                Add Book
            </button>

        </div>

    )

}

export default BookForm;