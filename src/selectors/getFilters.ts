import { createSelector } from "reselect";

const getSearch = (state: AppState) => state.search;
const getRole = (state: AppState) => state.role;

export default createSelector([getSearch, getRole], (search, role) => {
  const filter: TableZellerCustomerFilterInput = {
    ...(search && { name: { contains: search } }),
    ...(role && { role: { eq: role } }),
  };

  return Object.keys(filter).length ? { filter } : {};
});
