const Alpaca = require('@alpacahq/alpaca-trade-api');
const alpaca = new Alpaca();

alpaca.getAccount()
  .then((account) => {
    if (account.trading_blocked) {
      console.log('Account is blocked');
    }
    console.log(`$${account.buying_power} is available`);
  })