import '../styles/Xbook.css'
import { useState } from 'react'
import Dropdown from './Dropdown';

function Xbook({ title, coverImageURL, author, wksOnList, description, links }) {

  return (
    <div className='x-book-container'>
      <img style={{order:2,width:'auto',height:'135px', marginLeft:'auto'}} src={coverImageURL}></img>
      <div className='left-container'>
        {wksOnList > 1 ?
          (<div className='numWks'>{wksOnList} WEEKS ON THE LIST</div>)
          : (<div className='numWks' >NEW THIS WEEK</div>)}
        <div className='title'>{title}</div>
        <div className='author'>by {author}</div>
        <p className=' x-desc'>{description}</p>
        <Dropdown links={links} />
      </div>
    </div>
  )
}

export default Xbook       