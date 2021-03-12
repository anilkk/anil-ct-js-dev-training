const { getCustomersInStore, getMe } = require("./handson/store");
const { log } = require("./logger");

// getCustomersInStore('berlin-store').then(log).catch(log);
// getCustomersInStore('berlin-store').then(customers => log(`number of customers --> ${customers.body.count}`)).catch(log);

getMe().then(log).catch(log);
