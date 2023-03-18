const dev = 'http://localhost:8086'

const API = {
  dev,
  login: dev + '/api/login/:code',
  register: dev + '/api/register',
  address: dev + '/api/address',
  user: dev + '/api/user',
  canteen: dev + '/api/canteen',
  canteenRating: dev + '/api/canteen/rating',
  goods: dev + '/api/goods',
  recharge: dev + '/api/recharge',
  order: dev + '/api/order',
  _login: dev + '/api/b/login',
  _canteen: dev + '/api/b/canteen',
  _sort: dev + '/api/b/sort',
  _goods: dev + '/api/b/goods',
  _order: dev + '/api/b/order',
  _rider: dev + '/api/b/rider',
}

module.exports = API