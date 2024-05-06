import React from 'react';

const StarRating = ({ voteAverage }) => {
  const fullStarsCount = Math.floor(voteAverage);
  const hasHalfStar = voteAverage % 1 !== 0;

  return (
    <div className="star-rating">
      {[...Array(fullStarsCount)].map((_, index) => (
        <i key={index} className="fa fa-star checked"></i>
      ))}
      {hasHalfStar && <i className="fa fa-star-half-o checked"></i>}
      {[...Array(5 - fullStarsCount - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <i key={index} className="fa fa-star-o"></i>
      ))}
    </div>
  );
};
export default StarRating;


























// function displayStars(voteAverage) {
//     const starRatingDiv = document.getElementById('star-rating');
//     starRatingDiv.innerHTML = ''; // Clear any existing stars
  
//     // Calculate the number of full and half stars
//     const fullStars = Math.floor(voteAverage);
//     const halfStar = voteAverage % 1 >= 0.5 ? 1 : 0;
//     const emptyStars = 5 - fullStars - halfStar;
  
//     // Add full stars
//     for (let i = 0; i < fullStars; i++) {
//       starRatingDiv.innerHTML += '<span class="fa-star vote">★</span>';
//     }
  
//     // Add half star
//     if (halfStar) {
//       starRatingDiv.innerHTML += '<span class="fa-star vote">☆</span>';
//     }
  
//     // Add empty stars
//     for (let i = 0; i < emptyStars; i++) {
//       starRatingDiv.innerHTML += '<span class="fa-star">☆</span>';
//     }
//   }
  
//   // Example usage with a vote_average of 7.5
//   displayStars(7.5);
  