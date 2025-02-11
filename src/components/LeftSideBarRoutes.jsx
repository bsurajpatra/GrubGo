import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import FoodOrder from './FoodOrder';
import Favourite from './Favourite';
import Message from './Message';
import OrderHistory from './OrderHistory';
import Bills from './Bills';
import Settings from './Settings';

function LeftSideBarRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/food-order" element={<FoodOrder />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/message" element={<Message />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/bills" element={<Bills />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default LeftSideBarRoutes;