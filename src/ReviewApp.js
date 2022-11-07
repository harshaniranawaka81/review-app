import React, { useState } from 'react'
import ReviewForm from './ReviewForm'
import AddReview from './AddReview'
import EditReview from './EditReview'

const ReviewApp = () => { 

  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    review.id = reviews.length + 1;
    setReviews([...reviews, review]);
  }

  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  }

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: 0, comment: '' };
  const [currentReview, setCurrentReview] = useState(initialFormState);

  const editReview = (review) => {
    setEditing(true);  
    setCurrentReview({ id: review.id, comment: review.comment });
  }

  const updateReview = (id, updatedReview) => {
    setEditing(false);  
    setReviews(reviews.map((review) => (review.id === id ? updatedReview : review)))
  }

  return (
    <div>
      <h1>Review Application</h1>
      <div>
        {editing ? (
            <div>
            <h2>Edit review</h2>
            <EditReview
                setEditing={setEditing}
                currentReview={currentReview}
                updateReview={updateReview}
            />
            </div>
        ) : (
            <div>
            <h2>Add review</h2>
            <AddReview addReview={addReview} />
            </div>
        )}
        <div>
          <h2>View reviews</h2>
          <ReviewForm reviews={reviews} deleteReview={deleteReview} editReview={editReview} />
        </div>
      </div>
    </div>
  )
}

export default ReviewApp