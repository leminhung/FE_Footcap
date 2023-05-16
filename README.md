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
* `src/admin/*` including files that handle the functions & components of ddmin role
* `src/containers/*` including files & folders just are pages of website
* `src/components/*` including files & folders just are components of website
* `src/constants/*.js` defind constants vars that use in whole project 
* `src/store` that is where handles `state` of website by using redux 
* `src/utils` that is where includes some necessary to be reusable in project 
* `.env` including some vars environment
* `routes.js` that is where handle routing of website
* `package.json` that is where hold libs that used in project


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
