import React from "react";

// defining props type in component 1
type ProfileProps = {
  name: string;
  age: number;
  status: "programmer" | "designer" | "CEO";
  address?: string;
  children?: React.ReactNode;
};
const Profile = ({ name, age, status, address, children }: ProfileProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{status}</p>
      <p>{address}</p>
      <div>{children}</div>
    </div>
  );
};

export default Profile;
