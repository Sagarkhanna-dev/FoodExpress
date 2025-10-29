import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

// ✅ DEPLOYMENT READY: Configure CORS for both local and production
app.use(cors({
    origin: [
        'http://localhost:1234',           // Local development
        'https://your-frontend-domain.netlify.app', // Your Netlify domain
        'https://your-app-name.netlify.app'         // Generic Netlify pattern
    ],
    credentials: true
}));

app.use(express.json());

// ✅ DEPLOYMENT READY: Use environment variable for port
const PORT = process.env.PORT || 3001;

// Swiggy API proxy with proper headers
app.get('/api/restaurants', async (req, res) => {
  try {
    console.log('📡 Fetching restaurants from Swiggy...');
    
    const swiggyUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4148245&lng=80.23213129999999&page_type=DESKTOP_WEB_LISTING';
    
    const response = await axios.get(swiggyUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Referer': 'https://www.swiggy.com/',
        'Origin': 'https://www.swiggy.com',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site'
      }
    });

    console.log('✅ Received response from Swiggy');
    
    // Try to find restaurants in different card positions
    const cards = response.data?.data?.cards || [];
    console.log(`📊 Total cards found: ${cards.length}`);
    
    let restaurants = null;

    for (let i = 0; i < Math.min(cards.length, 10); i++) {
      const card = cards[i];
      restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
      if (restaurants && Array.isArray(restaurants)) {
        console.log(`🎯 Found restaurants in card[${i}], count: ${restaurants.length}`);
        break;
      }
      
      // Also try another common structure
      if (!restaurants) {
        restaurants = card?.card?.card?.restaurants;
      }
    }

    if (restaurants && restaurants.length > 0) {
      res.json({
        success: true,
        data: restaurants,
        count: restaurants.length,
        message: `Successfully loaded ${restaurants.length} restaurants`
      });
    } else {
      // Return mock data if no restaurants found
      const mockRestaurants = getMockRestaurants();
      res.json({
        success: true,
        data: mockRestaurants,
        count: mockRestaurants.length,
        message: 'Using demo data (Swiggy API blocked)'
      });
    }

  } catch (error) {
    console.error('❌ Backend error:', error.message);
    
    // Return mock data on error
    const mockRestaurants = getMockRestaurants();
    res.json({
      success: true,
      data: mockRestaurants,
      count: mockRestaurants.length,
      message: 'Using demo data due to error: ' + error.message
    });
  }
});

// Mock data function
function getMockRestaurants() {
  return [
    {
      "info": {
        "id": "1",
        "name": "Bombay Kitchen",
        "cloudinaryImageId": "b1d94c4ef64f4b4d8e0b6c8e7c6e8c8e",
        "locality": "Civil Lines",
        "areaName": "Civil Lines",
        "costForTwo": "₹300 for two",
        "cuisines": ["North Indian", "Chinese", "Biryani"],
        "avgRating": 4.2,
        "sla": {"deliveryTime": 25},
        "promoted": false
      }
    },
    {
      "info": {
        "id": "2",
        "name": "Pizza Hub",
        "cloudinaryImageId": "c3e8b4e5f6a7b8c9d0e1f2a3b4c5d6e7",
        "locality": "Main Market",
        "areaName": "City Center",
        "costForTwo": "₹400 for two",
        "cuisines": ["Pizzas", "Italian", "Fast Food"],
        "avgRating": 4.1,
        "sla": {"deliveryTime": 30},
        "promoted": true
      }
    },
    {
      "info": {
        "id": "3",
        "name": "Burger Point",
        "cloudinaryImageId": "d4e9f5a6b7c8d9e0f1a2b3c4d5e6f7a8",
        "locality": "MG Road",
        "areaName": "Downtown",
        "costForTwo": "₹250 for two",
        "cuisines": ["Burgers", "American", "Fast Food"],
        "avgRating": 4.3,
        "sla": {"deliveryTime": 20},
        "promoted": false
      }
    },
    {
      "info": {
        "id": "4",
        "name": "South Indian Delight",
        "cloudinaryImageId": "e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0",
        "locality": "Gandhi Nagar",
        "areaName": "Residential Area",
        "costForTwo": "₹200 for two",
        "cuisines": ["South Indian", "Dosa", "Idli"],
        "avgRating": 4.4,
        "sla": {"deliveryTime": 15},
        "promoted": false
      }
    },
    {
      "info": {
        "id": "5",
        "name": "Chinese Wok",
        "cloudinaryImageId": "f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1",
        "locality": "Food Street",
        "areaName": "Commercial Area",
        "costForTwo": "₹350 for two",
        "cuisines": ["Chinese", "Asian", "Noodles"],
        "avgRating": 4.0,
        "sla": {"deliveryTime": 35},
        "promoted": true
      }
    }
  ];
}

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend is working!',
    timestamp: new Date().toISOString(),
    port: PORT,
    environment: process.env.NODE_ENV || 'development'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Swiggy Proxy Backend is running!',
    endpoints: {
      health: '/health',
      restaurants: '/api/restaurants'
    },
    deployment: 'Ready for production! 🚀'
  });
});

// ✅ DEPLOYMENT READY: server startup message
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port: ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`📍 Restaurants API: http://localhost:${PORT}/api/restaurants`);
  console.log(`📍 Ready for deployment!`);
});