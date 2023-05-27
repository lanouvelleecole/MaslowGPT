const Prevention = require('./../../classes/prevention');

class FatiguePrevention extends Prevention
{
  constructor(effective = true)
  {
    super(effective);
  }
}

module.exports = FatiguePrevention;
