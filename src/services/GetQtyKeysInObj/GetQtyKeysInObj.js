
/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

// This function returns the quantity of keys present in obj.
const GetQtyKeysInObj = (obj) => {
  if (!obj) {
    return null;
  }
  return Object.keys(obj).length;
};

export default GetQtyKeysInObj;
    