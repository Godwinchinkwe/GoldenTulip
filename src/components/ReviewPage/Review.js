import React, { useState } from "react";
import "./Review.css";
import { ReviewData } from "./ReviewData";
import { moreReviewsData } from "./MorereviewData";

export default function Review() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
//   const [reviews, setReviews] = useState(ReviewData);

   const loadMore = () => {
  const newCount = visibleCount + 20;
  setVisibleCount(newCount);
  setReviews(allReviews.slice(0, newCount));
};


  const allReviews = [...ReviewData, ...moreReviewsData];
  const [visibleCount, setVisibleCount] = useState(20);
  const [reviews, setReviews] = useState(allReviews.slice(0, visibleCount));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !rating || !comment) {
      alert("Please fill all fields");
      return;
    }


 

    const newReview = {
      id: Date.now(),
      name,
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setRating(0);
    setComment("");
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        ).toFixed(1)
      : 0;

  return (
    <div className="review-container">
      <h1 className="review-title">Guest Reviews</h1>
      <p className="review-subtitle">
        Read what our guests are saying about their experience.
      </p>

      {/* Summary Section */}
      <div className="review-summary">
        <div className="summary-card">
          <h2>{reviews.length}</h2>
          <p>Total Reviews</p>
        </div>
        <div className="summary-card">
          <h2>{averageRating}</h2>
          <p>Average Rating</p>
        </div>
      </div>

      {/* Review Form */}
      <form className="review-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Write a Review</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Star Rating */}
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${
                (hoverRating || rating) >= star ? "active" : ""
              }`}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Write your review..."
          className="textarea-fields"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button className="submit-btn">Submit Review</button>
      </form>

      {/* Display Reviews */}
      <div className="reviews-list">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-header">
              <h3>{review.name}</h3>
              <span className="review-date">{review.date}</span>
            </div>

            <div className="review-rating">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="star active">★</span>
              ))}
            </div>

            <p className="review-text">{review.comment}</p>
          </div>
        ))}
      </div>

      {visibleCount < allReviews.length && (
  <button className="submit-btn" onClick={loadMore}>
    Load More Reviews
  </button>
)}

      
    </div>
  );
}
