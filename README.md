# Frontend-ecommerce

## Project structure
```
repo/
  |__public/
  | |__css/
  | | |__style.css
  | |__images/
  |   |__*.jpg
  |   |__*.png
  |   |__*.svg
  | |__...
  |__src/
  | |__admin/
  |   |__AdminCreateCategory.js
  |   |__AdminDashBoard.js
  |   |__AdminEditProductCategory.js
  |   |__...
  | |__cart/
  |   |__AddToCart.js
  |   |__OrderSuccess.js
  |   |__...
  | |__component/
  |   |__Header
  |   |__Cart
  |   |__ProductList
  |   |__...
  | |__constants/
  |   |__cartConstants.js
  |   |__endpoints.js
  |   |__errorMessage.js
  |   |__...
  | |__images/
  |   |__*.png
  |   |__*.jpg
  | |__product/
  |   |__createProduct.js
  |   |__viewProduct.js
  | |__store/
  |   |__cart
  |     |__cart.actions.js
  |     |__cart.reducer.js
  |   |__order
  |     |__order.actions.js
  |     |__order.reducer.js
  |   |__product
  |     |__product.actions.js
  |     |__product.reducer.js
  |   |__user
  |     |__user.actions.js
  |     |__user.reducer.js
  |     |__user.service.js
  |   |__index.js
  |   |__root.reducer.js
  | |__stripebutton/
  |   |__StripeButton.js
  | |__user/
  |   |__Signin
  |   |__Signup
  |   |__*.js
  | |__utils/
  |   |__Axios.js
  | |__App.css  
  | |__App.js  
  | |__index.js  
  |__.env
  |__.gitignore
  |__jsconfig.json
  |__package.json
  |__README.md
  |__yarn.lock
```

Purpose of folders
* `src/admin/*js` chứa các file thực hiện chức năng và thành phần của Admin
* `src/component/*` chứa các files và folders là các components của website
* `src/constants/*.js` định nghĩa giá trị của các biến sử dụng trong project 
* `src/store` là nơi quản lý `state` của website bằng redux 
* `src/utils` là nơi chứa những chức năng cần thiết để có thê reuse lại trong project 
* `.env` là nơi chứa các biến môi trường
* `package.json` là nơi chứa các thư viện được sử dụng trong project


## Guide

```sh
$ git clone https://github.com/leminhung/frontend-ecommerce
$ cd frontend-ecommerce
$ npm install
$ npm start
```

## References

- [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Redux](https://react-redux.js.org/)
- [Axios](https://viblo.asia/p/su-dung-axios-voi-react-1Je5E4zAlnL)
- [React documentation](https://reactjs.org/)
