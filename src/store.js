import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cardSlice from "./redux/slice/card-slice";
import maliSlice from "./redux/slice/mali-slice";
import transactionSlice from "./redux/slice/transaction-slice";
import activeCardSlice from "./redux/slice/active-card-slice";
import numberSlice from "./redux/slice/show-cardnumber";
import cardNumberSlice from "./redux/slice/cardnumber";
import userSlice from "./redux/slice/user-slice";
import PhoneSlice from "./redux/slice/phone";

const rootReducer = combineReducers({
  cardSlice: cardSlice,
  maliSlice: maliSlice,
  transactionSlice: transactionSlice,
  activeCardSlice: activeCardSlice,
  numberSlice: numberSlice,
  cardNumberSlice: cardNumberSlice,
  userSlice: userSlice,
  PhoneSlice: PhoneSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
