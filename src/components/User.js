import { useState } from "react";

const User = (props) => {
  const { name, location, email } = props;
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="user-card card">
      <div className="card-title allign-center">Tem info</div>
      <div className="card-body">
        <h1>Count:{count}</h1>
        <h1>Count2:{count2}</h1>

        <h5>Name: {name}</h5>
        <h5>Location: {location}</h5>
        <h5>Contact: {email}</h5>
      </div>
    </div>
  );
};

export default User;
