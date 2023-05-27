const {Maslow} = require('./index');

// Make a person with most basic needs
let person = new Maslow('physiological');
console.log(`The pyramid of needs has the following stages: ${person.stages}`);
console.log(`Person is at the stage: ${person.stage}`);
console.log(`Previous stage is: ${person.prevStage}`);
console.log(`Next stage is ${person.nextStage}`);
console.log(`Person needs: ${person.needs}`);

// Help them achieve a need/needs
let need = 'air';
person.fulfillNeed(need);
console.log(`Person fulfilled need: ${need}`);
console.log(`Person has fulfilled the following: ${person.needsFulfilled}`);
console.log(`Person now has the remaining needs: ${person.needs}`);
let remainingNeeds = ['water', 'food', 'shelter', 'sleep'];
person.fulfillNeeds(remainingNeeds);
console.log(`Person fulfilled needs: ${remainingNeeds}`);
if (person.needsMet) {
    console.log(`Person has fulfilled all needs for stage: ${person.stage}`);
}
// Move onto next stage (manually)
person.advanceStage();
console.log(`Person is at the stage: ${person.stage}`);
// Throw in a random need
need = 'short-term-gratification';
person.calibrate(need);
console.log(`Person has sudden need for: ${person.needs}`);
console.log(`Person is now at the stage: ${person.stage}`);
// Guess needs from phrasing (machine learning classifier)
let phrases = [
    'Has to breathe',
    'Has to eat',
    'Has to drink',
    'Has to live somewhere',
    'Has to rest',
    'Is not safe',
    'Has money issues',
    'Is sick',
    'Is anxious',
    'Is loney and wants to be surrounded by people',
    'Is loney and wants to be close with someone',
    'Is lonely with noone to talk to',
    'Nothing to do today',
    'Is feeling incapable',
    'Is feeling worthless',
    'Wants to make big plans',
    'Wants to always remember a new experience'
];
phrases.forEach( function(phrase) {
    need = person.guessNeed(phrase);
    console.log(`Person: ${phrase} (${need})`);
});
