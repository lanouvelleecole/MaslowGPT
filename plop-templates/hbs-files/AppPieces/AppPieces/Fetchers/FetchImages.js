import { Asset } from "expo-asset";

// chargeons les images.
export const FetchImages = async () => {
  // les images a charger
  const images = [
    require("assets/images/green.png"),
    require("assets/images/red.png"),
    require("assets/images/icon.png"),
    require("assets/images/baby.png"),
  ];

  // lance le chargement de toutes les images souhaitées
  // (ceci est asynchrone)
  const cachedImages = images.map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  // retourne la liste des images asynchrones
  const loadedImages = await Promise.all(cachedImages);

  return {
    yes: loadedImages[0].localUri,
    no: loadedImages[1].localUri,
    app_icon: loadedImages[2].localUri,
    baby: loadedImages[3].localUri,
  };
};
