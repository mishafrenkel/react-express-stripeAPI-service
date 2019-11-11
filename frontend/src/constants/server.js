const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://frenkel-stripe-service.herokuapp.com/'
  : 'https://frenkel-stripe-service.herokuapp.com/';

export default PAYMENT_SERVER_URL;