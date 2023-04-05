/**
 * les différents états possibles que Trucs peut avoir.
 */
const Trucs1 = 0;
const Trucs2 = 1;
const Trucs3 = 2;
const Trucs4 = 3;
const Trucs5 = 4;
const Trucs6 = 5;

/**
 *
 * @param {*} Trucs

 * @returns ........................
 */
const fnForTrucs = (Trucs) => {
  // si .........................
  if (Trucs === Trucs1) {
    return fnForTrucs1();
  }

  // si .........................
  else if (Trucs === Trucs2) {
    return fnForTrucs2();
  }

  // si .........................
  else if (Trucs === Trucs3) {
    return fnForTrucs3();
  }

  // si .........................
  else if (Trucs === Trucs4) {
    return fnForTrucs4();
  }

  // si .........................
  else if (Trucs === Trucs5) {
    return fnForTrucs5();
  }

  // si .........................
  else if (Trucs === Trucs6) {
    return fnForTrucs6();
  }

  // si .........................
  else if ([Trucs1, Trucs2, Trucs3, Trucs4, Trucs5, Trucs6].includes(Trucs)) {
    return fnForMultipleTrucs(Trucs);
  }

  // si c'est un state extraterrestre,
  // ............................
  else {
    return fnForUnknownTrucs();
  }
};

/**
 * si ............................
 */
const fnForTrucs1 = () => {
  return;
};

/**
 * si ............................
 */
const fnForTrucs2 = () => {
  return;
};

/**
 * si .............................
 */
const fnForTrucs3 = () => {
  return;
};

/**
 * si ............................
 */
const fnForTrucs4 = () => {
  return;
};

/**
 * si ............................
 */
const fnForTrucs5 = () => {
  return;
};

/**
 * si .............................
 */
const fnForTrucs6 = () => {
  return;
};

/**
 * si ..............................
 */
const fnForMultipleTrucs = (Trucs) => {
  return;
};

/**
 * si state extraterrestre
 */
const fnForUnknownTrucs = () => {
  return;
};

export const Trucs = {
  Trucs1,
  Trucs2,
  Trucs3,
  Trucs4,
  Trucs5,
  Trucs6,
  fnForTrucs,
};
