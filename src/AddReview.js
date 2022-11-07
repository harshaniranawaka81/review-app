import { useState, useEffect } from "react";

export default function AddReview(props){

    const initReview = { id: 1, comment: 'sample' };
    const [review, setReview] = useState(initReview);

    const onSubmitReview = (event) => {
        event.preventDefault();
        if(review.id === 0 || review.comment === ''){
            alert("Review ID and Comment should not be null");
            return;
        }
        props.addReview(review);
        setReview({ id: review.id, comment: review.comment });       
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;      
        setReview({ ...review, [name]: value });
    }

    useEffect(() => {

      document.getElementById("message").innerHTML = "Review saved!"

      setTimeout(
        () => document.getElementById("message").innerHTML = "",
        500
      );   
    });    

    return (
    <form onSubmit={onSubmitReview} >     
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
      <button>Add new review</button>
      <div id="message"></div>
    </form>    
    );
}