import React from 'react';

interface User {
  name: string;
  email: string;
  mobile: string;
  createdAt: Date;
}

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <div className="user-details">
      <h4>{user.name}</h4>
      <p><strong>Email : </strong>{user.email}</p>
      <p><strong>Mobile : </strong>{user.mobile}</p>
      
    </div>
  );
};

export default UserDetails;
