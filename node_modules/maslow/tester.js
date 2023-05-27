const {Maslow} = require('./index');
const TiredDiagnosis = require('./examples/diagnosis/tired');

let diagnosis = new TiredDiagnosis(
  {
    fatigue: true
  },
  {
    sleep: true
  }
);

// Make a person with most basic needs
let person = new Maslow('physiological', null, {
  sleep: TiredDiagnosis
});
person.on('need:diagnosis', (diagnosis) => {
  console.log('Diagnosed:', diagnosis);
});
person.guessNeed('Need a rest', true);
