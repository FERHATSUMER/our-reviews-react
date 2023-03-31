import React, { useState } from "react";
import people from '../assets/data.json';
import { FaGithubSquare } from "react-icons/fa";
import "./Reviews.css";

const Reviews = () => {
    const [index,setIndex]=useState(1)
    const {name,job,image,text}=people[index]
    return (
 <article className="rewiev">
    <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <h3>{name}</h3>
        <h3>{job}</h3>
        <p>{text}</p>
    </div>
 </article>
  );
};

export default Reviews;
