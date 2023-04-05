const TryParse = (txt) => {
  /* PLOP_INJECT_CODE */
  try {
    return JSON.parse(txt);
  } catch (e) {
    return null;
  }
};
export { TryParse };
