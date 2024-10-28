import { combineReducers, Reducer } from "redux";
import lodash from "lodash";
import customers from "./customers";
import search from "./search";
import role from "./role";

const PERSIST = {};

const rootReducer: Reducer<AppState> = combineReducers({
  ...PERSIST,
  customers,
  search,
  role,
});

export const PERSIST_KEYS = lodash.keys(PERSIST);
export default rootReducer;
