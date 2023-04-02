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

  const nextPerson = () => {
    setIndex((index)=>{
      let newIndex = index + 1;
      return newIndex
    })
  };

  const prevPerson = () => {
    setIndex((index)=>{
      let newIndex = index - 1;
      return newIndex
    })
  };
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
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn">Suprise Me</button>
      </div>
    </article>
  );
};

export default Reviews;
