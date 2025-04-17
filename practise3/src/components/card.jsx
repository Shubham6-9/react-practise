import React, { useState, useEffect } from "react";

function Card({ name, mail, gender, location, image, age, phone }) {


  return (
    <div id="card">
      <div id='image'>
        <img src={image.large} height="100%" width="100%" />
      </div>
      <h2>{name.title} {name.first} {name.last}</h2>
      <p>Email: {mail}</p>
      <p>Gender: {gender}</p>
      <p>Age: {age} years</p>
      <div id="location">
        <h3>Address:</h3>
        <p>{location.street.number} - {location.street.name},</p>
        <p>{location.city}, {location.state}, {location.country}</p>
        <p>Postal code: {location.postcode}</p>
        <h4>Phone Number: <span>{phone}</span></h4>
      </div>
    </div>
  );
}

export default Card