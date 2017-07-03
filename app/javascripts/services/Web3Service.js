import Web3 from 'web3';
import _ from 'lodash';

var callbacks = [];
var web3;
var test = false;

window.addEventListener('load', function() {
  if (!test && typeof window.web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    web3 = new Web3(window.web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8001. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8001"));
  }

  _.each(callbacks, function(_cb) { _cb(web3); });
});

var Web3Service = {
  fetchWeb3: function(_callback) {
    if(web3) {
      _callback(web3);
    } else {
      callbacks.push(_callback);
    }
  }
};

export default Web3Service;
