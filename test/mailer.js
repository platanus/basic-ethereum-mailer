var Mailer = artifacts.require("./Mailer.sol");

contract('Mailer', function(accounts) {
  var mailer;

  beforeEach(function() {
    return Mailer.new().then(function(_instance) {
      mailer = _instance;
    });
  });

  describe('sendEmail', function() {
    it("triggers a SendEmail event", function() {
      return mailer
        .sendEmail('hola@platan.us', 'helloworld', { from: accounts[0] })
        .then(function(_tx) {
          assert.equal(_tx.logs.length, 1);
          assert.equal(_tx.logs[0].args.recipient, 'hola@platan.us');
        });
    });
  });
});
