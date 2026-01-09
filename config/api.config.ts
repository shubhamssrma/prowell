// API Base URLs for different microservices
export const API_BASE_URLS = {
  // AUTH: 'http://localhost:5000/api/auth',
  AUTH: 'https://prowell-backend.onrender.com/api/auth',
  // PRODUCTS_MANAGEMENT: 'http://localhost:5000/api'
  PRODUCTS_MANAGEMENT: 'https://prowell-backend.onrender.com/api'
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  // =====================================
  // enpoints for CRM management [START]
  // =====================================

  PRODUCTS: {
    GET_ALL: '/products',
    GET_BY_SPECIES: "/products/productsBySpecies",
    GET_BY_SEGMENTS: "/products/productsBySegments",
    GET_BY_SLUG: "/products"
  },
  CATEGORIES: {
    GET_ALL: '/categories',
    CREATE:'/categories'
  },
  SPECIES: {
    GET_ALL: '/species',
  },

  USERS: {
    LOGIN: "/login",
  }

  // =====================================
  // enpoints for CRM management [END]
  // =====================================
} as const;

// Request timeout
export const REQUEST_TIMEOUT = 30000; // 30 seconds

// Common headers
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};
