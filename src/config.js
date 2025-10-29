// src/config.js
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
    ? 'https://foodexpress-backend-bleh.onrender.com'  // ← Your ACTUAL Render URL
    : 'http://localhost:3001';

console.log('API Base URL:', API_BASE_URL);