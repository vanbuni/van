import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Post from './Post'
import {default as data} from '../data/posts.json'
import './Pages.css'

function Blog() {

const blogList = data.map(data =>
  <p id = {`${data.key}`}>
    <Link className='blogTitle' to={`/post/${data.slug}`}>{data.title}</Link>
  </p>)
console.log(blogList);
  return (
    <BrowserRouter>
    <div>
      <div className="pageTitle"><h1>Van's Blogs</h1></div>
      <div className="gridPannel">
        <div className="blogMenu">{blogList}</div>
        <div className="blogPost">
          <Switch>
            <Route path= '/Post/:slug'><Post/></Route>
          </Switch>
        </div>
      </div>
    </div>
    
    </BrowserRouter>
  )
}

export default Blog
