import '../styles/Book.css'
import { useState } from 'react'
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom'


function Book({ title, coverImageURL, author, wksOnList, description, links, isbn }) {
  return (
    <div className='card'>
      <Link className='genre-link' to='book/favbook' state={{ coverImageURL, title, author, wksOnList, description, links, isbn }}>
        <img className='coverImage' src={coverImageURL}></img>
      </Link>
      {wksOnList > 1 ?
        (<div className='numWks'>{wksOnList} WEEKS ON THE LIST</div>)
        : (<div className='numWks'>NEW THIS WEEK</div>)}
      <div className='title'>{title}</div>
      <div className='author'>by {author}</div>
      <p className='desc'>{description}</p>
      <Dropdown links={links} />
    </div>
  )
}

export default Book       