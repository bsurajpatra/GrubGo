import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import HistoryIcon from '@mui/icons-material/History';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';

function LeftSideBar() {
  return (
    <aside className="dashboard__sidebar">
      <h2 className="app-name">GrubGo</h2>
      <ul>
        <li>
          <Link to="/dashboard">
            <DashboardIcon /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/food-order">
            <FastfoodIcon /> <span>Food Order</span>
          </Link>
        </li>
        <li>
          <Link to="/favourite">
            <FavoriteIcon /> <span>Favourite</span>
          </Link>
        </li>
        <li>
          <Link to="/message">
            <MessageIcon /> <span>Message</span>
          </Link>
        </li>
        <li>
          <Link to="/order-history">
            <HistoryIcon /> <span>Order History</span>
          </Link>
        </li>
        <li>
          <Link to="/bills">
            <ReceiptIcon /> <span>Bills</span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <SettingsIcon /> <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div className="sidebar-content">
        <div className="upgrade-banner">
          <p>Upgrade your account to enjoy much more features!</p>
          <button className="upgrade-button">Upgrade</button>
        </div>
      </div>
    </aside>
  );
}

export default LeftSideBar;