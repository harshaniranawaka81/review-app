import React, { useState, useEffect } from 'react'

const EditReview = (props) => {
    const [review, setReview] = useState(props.currentReview);

    const handleInputChange = (event) => {
        const { name, value } = event.target;      
        setReview({ ...review, [name]: value });
    }

    useEffect(() => {;
      document.getElementById("message").innerHTML = "Editing...!";    
    });   

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(review.id === 0 || review.comment === ''){
            alert("Review ID and Comment should not be null");
            return;
        }
        props.updateReview(review.id, review);
      }}
    >
      <label>ID</label>
      <input
        type="text"
        name="id"
        value={review.id}
        onChange={handleInputChange}
      />
      <label>Comment</label>
      <input
        type="text"
        name="comment"
        value={review.comment}
        onChange={handleInputChange}
      />
      <button>Update review</button>
      <button 
        onClick={() => props.setEditing(false)}>
        Cancel
      </button>
      <button>Add new review</button>
      <div id="message"></div>     
    </form>
  )
}

export default EditReview