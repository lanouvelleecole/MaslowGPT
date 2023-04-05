/* PLOP_INJECT_IMPORT */

import { MakeLoadingSpinner } from "../MakeLoadingSpinner/MakeLoadingSpinner.js";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 * RunAsyncCallbackInCMD
 *
 * @description Executes an async callback and prints onSuccess or onError accordingly
 *
 * @param {(callback: Function) => void} asyncCallback An asynchronous function doing some work
 * @param {string} waitMsg The message to be printed while the async callback is running
 * @param {string} onSuccess The success message
 * @param {string} onError The error message
 *
 * @returns {void | number} Returns 42 if ahyncCallback ran successfully, -1 if there was an error
 */
async function RunAsyncCallbackInCMD({
  asyncCallback,
  waitMsg,
  onSuccess,
  onError,
}) {
  /* PLOP_INJECT_CODE */
  const stopSpinner = MakeLoadingSpinner(waitMsg);

  try {
    const data = await asyncCallback();

    stopSpinner();

    !onSuccess ?? onSuccess(data);

    return data;
  } catch (error) {
    stopSpinner();

    !onError ?? onError(error);

    return null;
  }
}

export { RunAsyncCallbackInCMD };
