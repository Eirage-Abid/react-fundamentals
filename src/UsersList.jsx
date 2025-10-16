import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  //  Using tailwindcss to style the loading and error states
  if (loading) return <p className="text-center text-gray-500 mt-10">Loading users...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  //  Using tailwindcss to style the users list
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Users List</h1>
      <ul className="space-y-3">
        {users.map(user => (
          <li
            key={user.id}
            className="p-4 bg-white rounded-xl shadow hover:bg-blue-50 transition"
          >
            <Link to={`/user/${user.id}`} className="text-lg font-medium text-gray-700">
              {user.name}
            </Link>
            <p className="text-sm text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}