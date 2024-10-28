import { configureStore } from "@reduxjs/toolkit";
import rootReducer, { PERSIST_KEYS } from "../reducers";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { listenerMiddleware } from "./listeners";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: PERSIST_KEYS,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(listenerMiddleware.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
