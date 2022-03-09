import BookFormHandler from './BookFormHandler';
import './Book.css';
import {useState} from 'react'
function Book({deleteBook , editBook, title, genre, _id, author, release_year}) {

const [editToggle, setEditToggle] = useState(false)



  return (
    <div className = 'book'>
       { !editToggle ? 
       <>
      <h1>Title: {title}</h1>
      <p>Genre: {genre}</p>
      <p>Author: {author}</p>
      <p>Release Year: {release_year}</p>
      <button 
      onClick = {() => deleteBook(_id)}
       className = 'delete-btn'>
         Delete
         </button>

      <button 
      onClick = {() => setEditToggle(prevToggle => !prevToggle)} 
       className = 'edit-btn'>
         Edit
         </button>

        </>

        :

        <>

        <BookFormHandler 
        title={title}
        genre={genre}
        _id = {_id}
        author = {author}
        release_year = {release_year}
        btnText= 'Submit Edit'
        submit = {editBook}/>

        <button  onClick = {() => setEditToggle(prevToggle => !prevToggle)}>
         
          Close
          </button>

        </>


}
        
    </div>
  )
}

export default Book