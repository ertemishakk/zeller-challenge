import CustomerTypes from "../components/CustomerTypes";
import CustomerList from "../components/CustomerList";
import SearchBox from "../components/SearchBox";

export const CUSTOMERS_SCREEN = "CUSTOMERS";

const Customers = () => {
  return (
    <>
      <SearchBox />
      <CustomerTypes />
      <CustomerList />
    </>
  );
};

export default Customers;
