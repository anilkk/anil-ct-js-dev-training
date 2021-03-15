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

// getCustomerByKey(customerSampleData.key).then(log).catch(log);

getCustomerById("91f8fb2e-1667-44f2-afc0-7e1c693bce3b").then(log).catch(log);

//createCustomerKeyVerfiedEmail(customerSampleData).then(log).catch(log);

//assignCustomerToCustomerGroup('test123','testCustomerGroup123').then(log).catch(log);
