const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? process.env.REACT_API_KEY_PROD
  : process.env.REACT_API_KEY_DEV

export default STRIPE_PUBLISHABLE;