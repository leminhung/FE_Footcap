# Footcap

## Project structure
```
FE_SportStore/
  |__public/
  | |__assets/
  | |__images/
  | |__...
  |__src/
  | |__admin/
  |   |__Admin*
  |   |__components
  |   |__...
  | |__component/
  |   |__Header
  |   |__Cart
  |   |__Private*.js
  |   |__...
  | |__constants/
  | |__containers/
  |   |__HomePage
  |   |__ViewOrder
  |   |__WrapperContainer.js
  |   |__...
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
  |   |__index.js
  | |__styles/
  |   |__css
  |   |__font
  |   |__scss
  | |__utils/
  |   |__*.js
  | |__routes.js  
  |__.env
  |__.gitignore
  |__jsconfig.json
  |__package.json
  |__README.md
```

Purpose of folders
* `src/admin/*js` chứa các file thực hiện chức năng và thành phần của Admin
* `src/components/*` chứa các files và folders là các components của website
* `src/constants/*.js` định nghĩa giá trị của các biến  sử dụng trong project 
* `src/store` nơi quản lý `state` của website bằng redux 
* `src/utils` nơi chứa những chức năng cần thiết để có thê reuse lại trong project 
* `.env` nơi chứa các biến môi trường
* `routes.js` nơi quản lý routing của website
* `package.json` nơi chứa các thư viện được sử dụng trong project


## Guide

```sh
$ git clone https://github.com/leminhung/FE_SportStore
$ cd FE_SportStore
$ yarn 
$ yarn start
```

## References

- [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Redux](https://react-redux.js.org/)
- [Axios](https://viblo.asia/p/su-dung-axios-voi-react-1Je5E4zAlnL)
- [React documentation](https://reactjs.org/)
