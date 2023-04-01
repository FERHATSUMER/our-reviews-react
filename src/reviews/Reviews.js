import React, { useState } from "react";
import people from "../assets/data.json";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithubSquare,
  FaQuoteRight,
} from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(1);
  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text} </p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft />
        </button>
        <button className="next-btn">
          <FaChevronRight />
        </button>
        <button className="random-btn">Suprise Me</button>
      </div>
    </article>
  );
};

export default Reviews;
