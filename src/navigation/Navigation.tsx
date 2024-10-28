import { useEffect } from "react";
import Customers, { CUSTOMERS_SCREEN } from "../screens/Customers";
import DefaultNavigation from "./DefaultNavigation";
import { boot } from "../thunks/boot";
import { useAppDispatch } from "../app/hooks";
import Customer, { CUSTOMER_SCREEN } from "../screens/Customer";

const Navigation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(boot());
  }, []);

  const screens: ScreenNavigation[] = [
    {
      name: CUSTOMERS_SCREEN,
      component: Customers,
      options: {
        header: () => null,
      },
    },
    {
      name: CUSTOMER_SCREEN,
      component: Customer,
    },
  ];

  return <DefaultNavigation screens={screens} />;
};

export default Navigation;
