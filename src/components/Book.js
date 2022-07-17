import '../styles/Book.css'
function Book({ title, coverImageURL, author,wksOnList, description }) {
  return (
    <div className='card'>
      <img className = 'coverImage' src={coverImageURL}></img>
      {wksOnList>1?
       (<div className='numWks'>{wksOnList} WEEKS ON THE LIST</div>)
      :(<div className='numWks'>NEW THIS WEEK</div>)}
      <div className='title'>{title}</div>
      <div className='author'>by {author}</div>
      <p className='desc'>{description}</p>
      
    </div>
  )
}

export default Book       