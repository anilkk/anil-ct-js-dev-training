const {
  createCustomer,
  getCustomerById,
  getCustomerByKey,
  createCustomerKeyVerfiedEmail,
  assignCustomerToCustomerGroup,
  setFirstNameOfTheCustomerByKey
} = require("./handson/customer");
const { log } = require("./logger.js");

const customerSampleData = {
  firstName: "anil-2-test2",
  lastName: "kumar-2-test",
  email: "ak-2-test@test.com",
  password: "123",
  key: "ak-2-test1233",
  countryCode: "DE",
};

// createCustomer(customerSampleData).then(log).catch(log);

// getCustomerByKey(customerSampleData.key).then(log).catch(log);

// getCustomerById("91f8fb2e-1667-44f2-afc0-7e1c693bce3b").then(log).catch(log);

// createCustomerKeyVerfiedEmail(customerSampleData).then(log).catch(log);

//assignCustomerToCustomerGroup('ak-2-test1233','indoor-group').then(log).catch(log);

setFirstNameOfTheCustomerByKey('Anil Kumar', 'ak-2-test1233').then(log).catch(log);
