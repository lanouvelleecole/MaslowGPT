const Diagnosis = require('./../../classes/diagnosis');
const FatiguePrevention = require('./../prevention/fatigue');
const SleepTreatment = require('./../treatment/sleep');

class TiredDiagnosis extends Diagnosis
{
  constructor(preventionEffectiveness, treatmentEffectiveness)
  {
    super(preventionEffectiveness, treatmentEffectiveness);

    this.preventions = {
      fatigue: FatiguePrevention
    };
    this.treatments = {
      sleep: SleepTreatment
    };
  }
}

module.exports = TiredDiagnosis;
