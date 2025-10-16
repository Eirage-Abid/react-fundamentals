import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersList from './UsersList';
import UserDetail from './UsersDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
