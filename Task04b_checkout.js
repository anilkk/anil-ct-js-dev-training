const checkout = require("./handson/order");
const { log } = require("./logger.js");

const cartDraftData = {
  currency: "EUR",
  customerId: "8be2537e-96c8-4b31-b602-52681f05aab4",
  countryCode: "DE",
};

const paymentDraft = {
  key:"ak-21g-testPayment",
  amountPlanned:{
    currencyCode:'EUR',
    centAmount: 2*270000
  },
  customer:{
    typeId:'customer',
    id:'8be2537e-96c8-4b31-b602-52681f05aab4'
  }
}

// checkout.createCart(cartDraftData).then(log).catch(log)

// checkout.addLineItemsToCart(['macbook-15-128','macbook-15'],'f2a94057-8709-4eca-bd1e-930d3d82116b').then(log).catch(log)

// checkout.getCartById('f2a94057-8709-4eca-bd1e-930d3d82116b').then(log).catch(log)
// checkout.getCartById('f2a94057-8709-4eca-bd1e-930d3d82116b').then(cart => {
//   log(cart.body.lineItems[0])
// }).catch(log)

// checkout.createOrderFromCart('f2a94057-8709-4eca-bd1e-930d3d82116b').then(log).catch(log)

// checkout.getOrderById('37b49f01-b417-49c5-adc9-2df5ffdcf3f5').then(log).catch(log)
// checkout.createPayment(paymentDraft).then(log).catch(log)
// checkout.getPaymentById('d56dd0d9-e220-48b9-83f3-315b83358aaf').then(log).catch(log)
// checkout.addPaymentToOrder('d56dd0d9-e220-48b9-83f3-315b83358aaf','37b49f01-b417-49c5-adc9-2df5ffdcf3f5').then(log).catch(log)

// checkout
//   .updateOrderCustomState(
//     "67c67c4e-a3ab-4d38-ab0b-741cfd4b3d44",
//     "abaf987f-7be6-4f55-9323-cf8921f28075"
//   )
//   .then(log)
//   .catch(log);

const checkoutProcess = async () => {
  let emptyCart = await checkout.createCart(cartDraftData);

  let filledCart = await checkout.addLineItemsToCart(
    ["macbook-15-128", "macbook-15-128",'macbook-15-128'],
    emptyCart.body.id
  );
  
  filledCart = await checkout.addDiscountCodeToCart(
    "SALES",
    emptyCart.body.id
  );
  
  const payment = await checkout.createPayment(paymentDraft);

  let order = await checkout.createOrderFromCart(filledCart.body.id);
  order = await checkout.addPaymentToOrder(payment.body.id, order.body.id);
  order = await checkout.setOrderState('Confirmed',order.body.id);
  // if (order) {
  //   return {
  //     status: 201,
  //     message: "order created",
  //   };
  // }
  return {
    status: 201,
    message: "order created",
  };
};

checkoutProcess().then(log).catch(log);
