const { apiRoot, projectKey } = require("./client.js");

module.exports.getCustomerById = (ID) => apiRoot.withProjectKey({projectKey}).customers().withId({ID}).get().execute()

module.exports.getCustomerByKey = (key) => apiRoot.withProjectKey({projectKey}).customers().withKey({key}).get().execute()

const createCustomerDraft = (customerData) => {
  const {
    firstName,
    lastName,
    email,
    password,
    key,
    countryCode,
  } = customerData;
  return {
    firstName,
    lastName,
    email,
    password,
    key,
    addresses: [
      {
        country: countryCode,
      },
    ],
    defaultShippingAddress: 0,
  };
};

module.exports.createCustomer = (customerData) =>
  apiRoot
    .withProjectKey({ projectKey })
    .customers()
    .post({
      body: createCustomerDraft(customerData),
    })
    .execute();

const createCustomerDraftKey = (customerData) => {};

module.exports.createCustomerKeyVerfiedEmail = (customerData) => apiRoot.withProjectKey({projectKey}).customers().post({
  body: {
    ...createCustomerDraft(customerData),
    isEmailVerified: true,
  }
}).execute();

module.exports.assignCustomerToCustomerGroup = (
  customerKey,
  customerGroupKey
) => {
  return this.getCustomerByKey(customerKey).then(customer => {
    const updateActions = [{
        action: "setCustomerGroup",
        customerGroup: {
          key: customerGroupKey
        }
      }];
    
    return apiRoot.withProjectKey({projectKey}).customers().withId({ID: customer.body.id}).post({
      body: {
        actions: updateActions,
        version: customer.body.version
      }
    }).execute();
  })
};


module.exports.setFirstNameOfTheCustomerByKey = (firstName, customerKey) => {
  return this.getCustomerByKey(customerKey).then(customer => {
    const updateActions = [{
      action: "setFirstName",
      firstName
    }];
    
    return apiRoot.withProjectKey({projectKey}).customers().withId({ID: customer.body.id}).post({
      body: {
        actions: updateActions,
        version: customer.body.version
      }
    }).execute();
  });
};