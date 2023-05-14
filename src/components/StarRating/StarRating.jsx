import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={fullStars} />);
  }

  return (
    <div>
      <span style={{paddingRight: "0.3rem"}}>{rating}</span>
      {stars.map((star) => star)}
    </div>
  );
};

export default StarRating;
