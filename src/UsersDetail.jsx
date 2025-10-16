import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .finally(() => setLoading(false));
  }, [id]);

 //  Using tailwindcss to style the loading and error states
  if (loading) return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (!user) return <p className="text-center text-red-500 mt-10">No user found</p>;

  //  Using tailwindcss to style the user details
  return (
    <div className="p-8 max-w-xl mx-auto">
      <Link to="/" className="text-blue-600 hover:underline">← Back to Users</Link>
      <div className="bg-white shadow rounded-xl p-6 mt-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</h2>
        <p className="text-gray-600"><b>Email:</b> {user.email}</p>
        <p className="text-gray-600"><b>City:</b> {user.address.city}</p>
        <p className="text-gray-600"><b>Company:</b> {user.company.name}</p>
      </div>
    </div>
  );
}
