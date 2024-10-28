import { createSelector } from "reselect";
import getCustomers from "./getCustomers";
import lodash from "lodash";

export default createSelector([getCustomers], (customers) => {
  return ["Admin", "Manager"];
});
