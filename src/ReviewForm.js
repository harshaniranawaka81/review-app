import React from 'react'

export default function ReviewForm(props) {

    return (
        props.reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>{review.comment}</td>
              <td>
                <button onClick={() => props.editReview(review)}>Edit</button>
                <button onClick={() => props.deleteReview(review.id)}>Delete</button>
              </td>
            </tr>
          ))
      );
  
}
 

