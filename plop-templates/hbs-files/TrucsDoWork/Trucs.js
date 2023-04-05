import { DoWork } from "src/services/DoWork/DoWork";
import { GetWorkCancelGrabbers } from "./GetWorkCancelGrabbers/GetWorkCancelGrabbers";
import { GetWorkCancellers } from "./GetWorkCancellers/GetWorkCancellers";
import { GetWorkers } from "./GetWorkers/GetWorkers";
import { GetWorkProgressCallbacks } from "./GetWorkProgressCallbacks/GetWorkProgressCallbacks";
import { GetWorkSavers } from "./GetWorkSavers/GetWorkSavers";
import { OnBeforeWork } from "./OnBeforeWork/OnBeforeWork";
import { OnCreateSaveWork } from "./OnCreateSaveWork/OnCreateSaveWork";
import { OnWorkAlreadyGoingOn } from "./OnWorkAlreadyGoingOn/OnWorkAlreadyGoingOn";
import { OnWorkDone } from "./OnWorkDone/OnWorkDone";
import { OnWorkError } from "./OnWorkError/OnWorkError";

/**
 *
 * @param {*} initialWorkData
 *
 * Lance le boulot de ...
 */
export function Trucs({ initialWorkData }) {
  /** le méchanisme de boulot (liste de jobs a faire l'un après l'autre) */
  DoWork({
    id: "Trucs",
    onBefore: () => {
      /** avant de commencer boulot */
      OnBeforeWork();
    },
    onWorkAlreadyGoingOn: () => {
      /** si y'a déja du boulot going down */
      OnWorkAlreadyGoingOn();
    },
    onDone: (workList) => {
      /** quand boulot terminé avec succès  */
      OnWorkDone({ workList });
    },
    onError: (e) => {
      /** si y'a problémo durant boulot */
      OnWorkError({ e });
    },
    onCreateSaveWork: async () => {
      /** création de la liste de boulots individuels */
      return OnCreateSaveWork({ initialWorkData });
    },
    /** les callbacks qui font le boulot */
    workers: GetWorkers(),
    /** les callbacks qui stockent le résultat de work dans le Work tout juste exécuté */
    workSavers: GetWorkSavers(),
    /** les callbacks qui permettent de stocker des données d'annulation */
    workCancelGrabbers: GetWorkCancelGrabbers(),
    /** les callbacks qui permettent d'annuler le Work */
    workCancellers: GetWorkCancellers(),
    /** les callbacks de avancement de boulot */
    workProgressCallbacks: GetWorkProgressCallbacks(),
  });
}
