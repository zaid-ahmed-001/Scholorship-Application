// Alluserhome.tsx
import React, { useEffect, useState } from 'react';
import UserDetails from './Users'; // Correct the import path and include the User type

const Home: React.FC = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const json = await response.json();

      if (response.ok) {
        setusers(json);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="Alluser">
      <div className="users">
        {users &&
          users.map((user: any) => (
            <UserDetails key={user._id} user={user} />
          ))}
      </div>
    </div>
  );
};

export default Home;
