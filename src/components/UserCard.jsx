import { useState } from "react";

const UserCard = ({ name, location, company }) => {
  const [count] = useState(0);
  return (
    <>
      <h2>Name: {name}</h2>
      <h3>location : {location}</h3>
      <h3> company : {company}</h3>
      <h4>count : {count}</h4>
    </>
  );
};

export default UserCard;
