import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faEdit } from '@fortawesome/free-regular-svg-icons'

const Review = ({ review, handleDeleteClick, handleUpdateReview, userId }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [reviewInProgress, setReviewInProgress] = useState(review.text)

    // toggles edit model
    const toggleEdit = () => {
        setIsEditing((prev) => !prev)
        setReviewInProgress(review.text)
    }

    const cancelEdit = () => {
        // setIsEditing back to false
        toggleEdit()

        // set state version of review back to the original
        setReviewInProgress(review.text)
    }

    const save = (e) => {
        e.preventDefault()
        toggleEdit()
        console.log('saved')
        if (reviewInProgress !== review.text) {
            handleUpdateReview(review._id, reviewInProgress)
        }
    }

    return (
        <div className='review' >
            <img className='user-image' src={review.user.image} referrerPolicy="no-referrer"></img>
            <div className='name-and-review'>
                <div className='userName'>{review.user.displayName}</div>
                {isEditing ?
                    <form className='edit-form' onSubmit={save}>
                        <textarea
                            className='edit-input'
                            type='text'
                            name='text'
                            id='text'
                            value={reviewInProgress}
                            onChange={(e) => setReviewInProgress(e.target.value)}
                        />
                        <input className='' type='submit' value='save' />
                        <button onClick={cancelEdit}>cancel</button>
                    </form>
                    :
                    <div className='reviewText'>{review.text}</div>}
            </div>
            {userId == review.user._id &&
            <div className="edit-delete-btns-container">
                <FontAwesomeIcon
                    icon={faTrashCan}
                    className='delete-button'
                    onClick={() => handleDeleteClick(review._id)}
                />
                <FontAwesomeIcon
                    icon={faEdit}
                    className='edit-button'
                    onClick={() => toggleEdit()}
                />
            </div>
          } 
        </div>
    )
}

export default Review