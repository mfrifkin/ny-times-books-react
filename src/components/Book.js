import '../styles/Book.css'
import { useState } from 'react'
import Dropdown from './Dropdown';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function Book({ title, coverImageURL, author, wksOnList, description,links }) {

  return (
    <div className='card'>
      <img className='coverImage' src={coverImageURL}></img>
      {wksOnList > 1 ?
        (<div className='numWks'>{wksOnList} WEEKS ON THE LIST</div>)
        : (<div className='numWks'>NEW THIS WEEK</div>)}
      <div className='title'>{title}</div>
      <div className='author'>by {author}</div>
      <p className='desc'>{description}</p>
      <Dropdown links={links}/>
    </div>
  )
}

export default Book       