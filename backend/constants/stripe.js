const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
  ? process.env.API_KEY_PROD
  : process.env.API_KEY_DEV;

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;