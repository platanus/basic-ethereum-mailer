pragma solidity ^0.4.8;

contract Mailer {
  event SendEmail(
    string recipient,
    string message
  );

  function sendEmail(string _recipient, string _message) {
    SendEmail(_recipient, _message);
  }
}
