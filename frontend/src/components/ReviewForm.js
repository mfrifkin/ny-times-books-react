import {useState} from 'react'
import '../styles/ReviewForm.css'
function ReviewForm({postReview}) {

    const onSubmit =(e)=>{
        e.preventDefault()
        if(review){
            postReview(review)
            setReview('')
        }
        else{
           console.log('no goal')
        }
    }

    const [review, setReview] = useState('')
    const [placeHolder, setPlaceHolder] = useState('What did you think of this book?')

    return (
        < >
        <form onSubmit={onSubmit}>
            <textarea
              className='reviewInput'
              placeholder={placeHolder}
              type='text'
              name='text'
              id='text'
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          <div >
            <button className='review-btn' type='submit'>
              Add Review
            </button>
          </div>
        </form>
      </>
    ) 
}

export default ReviewForm

