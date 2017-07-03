import Web3Service from './Web3Service.js';
import MailerService from './MailerService.js';
import contract from 'truffle-contract';
import _ from 'lodash';

import wallet_artifacts from '../../../build/contracts/Mailer.json';

var Mailer = contract(wallet_artifacts);
var accounts;
var web3;

function setupMailer() {
  Mailer.setProvider(web3.currentProvider);

  web3.eth.getAccounts(function(_err, _accounts) {
    if (_err != null) {
      console.warn("There was an error fetching your accounts.");
      return;
    }

    // MailerFactory.availableAccounts = _accounts;
    factory.selectedAccount = _accounts[0];
    factory.status = 'ready';
  });
}

Web3Service.fetchWeb3(function(_web3) {
  web3 = _web3;
  setupMailer();
});

var factory = {
  status: 'not_ready',
  selectedAccount: null,
  createMailer () {
    return Mailer.new({ from: factory.selectedAccount, gas: 500000 }).then(function(_instance) {
      return new MailerService(_instance);
    });
  },
  loadMailer(_address) {
    return Mailer.at(_address).then(function(_instance) {
      return new MailerService(_instance);
    });
  }
};

export default factory;