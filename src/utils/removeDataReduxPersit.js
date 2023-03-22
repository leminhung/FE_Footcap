import { persistStore } from "redux-persist";
import store from "src/store";

const removeDataFromReduxPersit = () => {
  return new Promise((resolve, reject) => {
    // Purge RAM cached reducer states
    store.dispatch({ type: "RESET" });

    // Purge disk cached reducer states
    const persistor = persistStore(store, {}, (err) => {
      if (err) reject(err);
      resolve();
    });
    persistor.purge();
  });
};

export { removeDataFromReduxPersit };
