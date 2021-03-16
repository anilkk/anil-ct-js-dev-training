const { apiRoot, projectKey } = require("./client.js");

module.exports.createCart = (cartDraftData) =>
  apiRoot
    .withProjectKey({ projectKey })
    .carts()
    .post({
      body: createCartDraft(cartDraftData),
    })
    .execute();

const createCartDraft = (cartDraftData) => {
  const { currency, customerId, countryCode } = cartDraftData;

  return {
    currency,
    customerId,
    shippingAddress: {
      country: countryCode,
    },
  };
};

module.exports.customerSignIn = (customerDetails) => {};

module.exports.getCartById = (ID) =>
  apiRoot.withProjectKey({ projectKey }).carts().withId({ ID }).get().execute();

module.exports.addLineItemsToCart = (arrayOfSKUs, cartId) => {
  return this.getCartById(cartId).then(cart => {
    const updateActions = [];
    arrayOfSKUs.forEach(sku => {
      updateActions.push({
        action: 'addLineItem',
        sku
      })
    });

    return apiRoot.withProjectKey({projectKey}).carts().withId({ID: cart.body.id}).post({
      body: {
        actions: updateActions,
        version: cart.body.version
      }
    }).execute();
  })
}
module.exports.addDiscountCodeToCart = (discountCode, cartId) => {};

module.exports.createOrderFromCart = (cartId) => {
  return createOrderFromCartDraft(cartId).then(cartDraftData => {
    return apiRoot.withProjectKey({projectKey}).orders().post({
      body: cartDraftData
    }).execute();
  })
}

const createOrderFromCartDraft = (cartId) => {
  return this.getCartById(cartId).then((cart) => {
    return {
      id: cart.body.id,
      version: cart.body.version,
    };
  });
};

module.exports.getOrderById = (ID) => apiRoot.withProjectKey({projectKey}).orders().withId({ID}).get().execute();

module.exports.updateOrderCustomState = (customStateId, orderId) => {};

module.exports.createPayment = (paymentDraft) => apiRoot.withProjectKey({projectKey}).payments().post({
  body: paymentDraft
}).execute();

module.exports.setOrderState = (stateName, orderId) => {};
module.exports.getPaymentById = (ID) => apiRoot.withProjectKey({projectKey}).payments().withId({ID}).get().execute();

module.exports.addPaymentToOrder = (paymentId, orderId) => {
  return this.getOrderById(orderId).then(order => {
      const payment = '';
      const updateActions = [{
        action: 'addPayment',
        payment: {
          "typeId": "payment",
          "id": paymentId
        }
      }];

      return apiRoot.withProjectKey({projectKey}).orders().withId({ID: order.body.id}).post({
        body: {
          actions: updateActions,
          version: order.body.version
        }
      }).execute();
  });
};
