import { createSelector } from "reselect";

const getSearch = (state: AppState) => state.search;
const getRole = (state: AppState) => state.role;

export default createSelector([getSearch, getRole], (search, role) => {
  const filter: TableZellerCustomerFilterInput = {};

  if (search) {
    filter.name = {
      contains: search,
    };
  }

  if (role) {
    filter.role = {
      eq: role,
    };
  }

  return search || role ? { filter } : {};
});
