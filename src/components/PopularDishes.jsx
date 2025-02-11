import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function PopularDishes() {
  return (
    <div className="popular-dishes">
      <Card>
        <CardContent>
          <img src="/fish-burger.jpg" alt="Fish Burger" style={{ width: '50px', marginRight: '10px' }} />
          <Typography variant="h6">Fish Burger - $5.59</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <img src="/beef-burger.jpg" alt="Beef Burger" style={{ width: '50px', marginRight: '10px' }} />
          <Typography variant="h6">Beef Burger - $5.59</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <img src="/cheese-burger.jpg" alt="Cheese Burger" style={{ width: '50px', marginRight: '10px' }} />
          <Typography variant="h6">Cheese Burger - $5.59</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PopularDishes; 