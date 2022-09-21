import {useState} from 'react'
import '../styles/ReviewForm.css'
function ReviewForm({postReview}) {

    const onSubmit =(e)=>{
        e.preventDefault()
        if(review){
            console.log('sending review')
            postReview(review)

        }
        else{
           console.log('no goal')
        }
       
    }


    const [review, setReview] = useState('')
    const [placeHolder, setPlaceHolder] = useState('Add a review')

    return (
        <section >
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            {/* <label htmlFor='text'>Review</label> */}
            <input
              type='text'
              name='text'
              id='text'
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block' type='submit'>
              Add review
            </button>
          </div>
        </form>
      </section>
    ) 
}

export default ReviewForm

