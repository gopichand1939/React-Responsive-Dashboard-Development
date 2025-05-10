import * as React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ no need to import BrowserRouter here
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
