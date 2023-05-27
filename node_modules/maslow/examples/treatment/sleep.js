const Treatment = require('./../../classes/treatment');

class SleepTreatment extends Treatment
{
  constructor(effective = true)
  {
    super(effective);
  }
}

module.exports = SleepTreatment;
