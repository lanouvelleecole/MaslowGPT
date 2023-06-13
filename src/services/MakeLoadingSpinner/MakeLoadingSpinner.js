/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

// MakeLoadingSpinner: Affiche msg, suivi d'un loading spinner sur la ligne suivante, dans le command line. Retourne une callback permettant d'arrêter le spinner.
// Inputs:
// - msg (string, un message)
// Outputs:
// - Retourne une callback permettant d'arrêter le spinner.
import ora from "ora";

const MakeLoadingSpinner = (msg) => {
  /* PLOP_INJECT_CODE */

  console.log(msg);

  return () => {
    console.log(`🎉`);
  };
};

export { MakeLoadingSpinner };
