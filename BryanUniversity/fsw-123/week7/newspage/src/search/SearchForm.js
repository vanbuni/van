import React, {useState} from 'react'

const SearchForm = ({searchText}) => {
  const [text, setText] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault()
    searchText(text)
  }
  
  return (
    <div>
     <form onSubmit={handleSubmit}>
       <input className="homeInput" type="text" placeholder="e.g politics"  onChange={(e) => setText(e.target.value)}/>
       <button type="submit" className="homeButton">Search</button>
       
       </form> 
    </div>
  )
}

export default SearchForm
