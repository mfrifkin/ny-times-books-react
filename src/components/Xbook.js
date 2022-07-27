import '../styles/Xbook.css'
import { useState } from 'react'
import Dropdown from './Dropdown';

function Xbook({ title, coverImageURL, author, wksOnList, description, links }) {

  return (
    <div className='x-book-container'>
      <img style={{order:2,width:'120px'}} src={coverImageURL}></img>
      <div className='left-container'>
        {wksOnList > 1 ?
          (<div >{wksOnList} WEEKS ON THE LIST</div>)
          : (<div>NEW THIS WEEK</div>)}
        <div >{title}</div>
        <div >by {author}</div>
        <p >{description}</p>
        <Dropdown links={links} />
      </div>
    </div>
  )
}

export default Xbook       