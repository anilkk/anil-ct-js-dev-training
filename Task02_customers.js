const {
  createCustomer,
  getCustomerById,
  getCustomerByKey,
  createCustomerKeyVerfiedEmail,
  assignCustomerToCustomerGroup,
} = require("./handson/customer");
const { log } = require("./logger.js");

const customerSampleData = {
  firstName: "anil-1-test2",
  lastName: "kumar-1-test",
  email: "ak-1-test@test.com",
  password: "123",
  key: "ak-1-test1233",
  countryCode: "DE",
};

// createCustomer(customerSampleData).then(log).catch(log);

getCustomerByKey(customerSampleData.key).then(log).catch(log);

//getCustomerById("10cb16bf-a5d8-4f47-b664-fe5cae2f75d0").then(log).catch(log);

//createCustomerKeyVerfiedEmail(customerSampleData).then(log).catch(log);

//assignCustomerToCustomerGroup('test123','testCustomerGroup123').then(log).catch(log);
