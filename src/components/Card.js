import { StyledCard } from "./layout/cardStyle";
import { Link } from "react-router-dom";

const Card = ({ img, id, date, title, onClick }) => {
  return (
    <StyledCard className="card">
      <div className="image" onClick={onClick}>
        <div className="image-wrapper">
          <Link to={`/movie/` + id}>
            <img className="image-link" src={img} alt="img" />
          </Link>
        </div>
      </div>
      <div className="content">
        <Link to={`/movie/` + id} className="link">
          <h2>{title}</h2>
        </Link>
        <p>{date}</p>
        <p className="card_id">{id}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
