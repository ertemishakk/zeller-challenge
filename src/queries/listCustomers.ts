export const ListZellerCustomers = `
  query ListZellerCustomers($filter: TableZellerCustomerFilterInput) {
    listZellerCustomers(filter:$filter) {
      items {
        id
        email
        name
        role
      }
      nextToken
    }
  }
`;
