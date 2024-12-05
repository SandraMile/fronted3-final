import React, { useContext } from "react";
import { Link } from "react-router-dom";
import doctorImage from "/images/doctor.jpg";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const isFav = state.favorites.some((fav) => fav.id === id);

  const toggleFav = () => {
    dispatch({ type: "TOGGLE_FAV", payload: { name, username, id } });
  };

  return (
    <div className="card">
      <img src={doctorImage} alt="Doctor" className="card-image" />
      <Link to={`/dentist/${id}`} className="card-name">
        <h3>{name}</h3>
      </Link>
      <p>{username}</p>
      <button onClick={toggleFav} className="favButton">
        {isFav ? "🌟" : "★"}
      </button>
    </div>
  );
};

export default Card;
