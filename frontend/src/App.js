import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { getToken } from './utils/auth';

function PrivateRoute({ children }) {
  return getToken() ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}
