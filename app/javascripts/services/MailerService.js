import _ from 'lodash';

class MailerService {
  constructor(_mailerContract) {
    this.contract = _mailerContract;
    this.address = _mailerContract.address;
    this.events = [];

    // var filter = this.contract.SendEmail();
    // filter.watch((_error, _response) => {
    //   if (!error) console.log(result);
    // });
  }
}

export default MailerService;