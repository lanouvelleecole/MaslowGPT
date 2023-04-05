/* PLOP_INJECT_IMPORT */

// chargeons les states Redux.
export const FetchReduxStates = async () => {
  /* PLOP_INJECT_REDUX_INIT */

  // charge le state de la caméra
  //await addInitialCameraStateIfNeeded(rows);

  return;
};

/* initialise le state de la caméra stocké via Redux
async function addInitialCameraStateIfNeeded(rows) {
  
 
  if (rows.length == 0) {
    // ajoute les option défaut
    await SqliteReduxCameraOptions.AddRowToDatabase({
      row: {
        // que fait la caméra ?
        recordingState: VideoPickerState.noRecording,
 
        // "off" si flash éteint, ou "on" si allumé
        // modifiable via menu options
        flash: VideoPickerState.noFlash,
 
        // "back" pour la caméra derrière ton phone, "front" pour la caméra de selfie.
        // modifiable via menu options
        preferredCamera: VideoPickerState.backCamera,
 
        // la durée maximale des vidéos filmées
        // (par défaut la valeur fournie via props du component VideoPickerNative,
        // puis modifiable, via menu d'options)
        maxVideoDuration: VideoPickerState.maxVideoDuration,
 
        // identifiant CRUD
        uniqueId: "CameraState",
      },
    });
  }
 
  
}
*/
