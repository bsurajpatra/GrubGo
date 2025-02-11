import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBreadSlice, faHamburger, faCoffee, faPizzaSlice, faFish, faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import LeftSideBar from './LeftSideBar';
import FoodOrder from './FoodOrder';
import Favourite from './Favourite';
import PopularDishes from './PopularDishes';
import RecentOrders from './RecentOrders';
import { Card, CardContent, Typography } from '@mui/material';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <LeftSideBar />
      <main className="dashboard__main">
        <section className="greeting">
          <h1>Hello, Abhi</h1>
          <div className="balance">
            <p>Your Balance: <strong>$12,000</strong></p>
            <button className="top-up-button">Top Up</button>
          </div>
        </section>
        
        <section className="discount-voucher">
          <h2>Get Discount Voucher Up To 20%</h2>
          <p>Taste The Delight</p>
        </section>

        <section className="categories">
          <h3>Category</h3>
          <div className="category-list">
            <Card>
              <CardContent>
                <FontAwesomeIcon icon={faBreadSlice} size="2x" />
                <Typography variant="h6">Bakery</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <FontAwesomeIcon icon={faHamburger} size="2x" />
                <Typography variant="h6">Burger</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <FontAwesomeIcon icon={faCoffee} size="2x" />
                <Typography variant="h6">Beverage</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <FontAwesomeIcon icon={faDrumstickBite} size="2x" />
                <Typography variant="h6">Chicken</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <FontAwesomeIcon icon={faPizzaSlice} size="2x" />
                <Typography variant="h6">Pizza</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <FontAwesomeIcon icon={faFish} size="2x" />
                <Typography variant="h6">Seafood</Typography>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="popular-dishes">
          <h3>Popular Dishes</h3>
          <div className="popular-dishes">
            <Card>
              <CardContent>
                <img src="/fish_burger.jpg" alt="Fish Burger" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                <Typography variant="h6">Fish Burger - $5.59</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <img src="/chicken_burger.jpg" alt="Chicken Burger" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                <Typography variant="h6">Chicken Burger - $5.59</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <img src="/cheese_burger.jpg" alt="Cheese Burger" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                <Typography variant="h6">Cheese Burger - $5.59</Typography>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="recent-orders">
          <h3>Recent Order</h3>
          <RecentOrders />
        </section>

        <Routes>
          <Route path="*" element={<h2></h2>} />
          <Route path="food-order" element={<FoodOrder />} />
          <Route path="favourite" element={<Favourite />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
