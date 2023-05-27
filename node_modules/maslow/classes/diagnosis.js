class Diagnosis
{
  constructor(preventionEffectiveness = {}, treatmentEffectiveness = {})
  {
    this.preventionEffectiveness = preventionEffectiveness;
    this.treatmentEffectiveness = treatmentEffectiveness;
    this.preventions = {};
    this.treatments = {};
  }

  /**
    * Get recommended prevention
    */
  get prevention()
  {
    return Object.entries(this.preventions).find( ([preventionName, prevention]) => {
      return (this.preventionEffectiveness[preventionName] === true);
    }) || null;
  }

  /**
    * Get recommended treatment
    */
  get treatment()
  {
    return Object.entries(this.treatments).find( ([treatmentName, treatment]) => {
      return (this.treatmentEffectiveness[treatmentName] === true);
    }) || null;
  }
}

module.exports = Diagnosis;
