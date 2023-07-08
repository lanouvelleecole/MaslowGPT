import { GetFirestoreDocument } from "../../../../services/FirestoreCRUD/FirebaseCRUD.js";
import { hashAPIKey } from "../../../../services/GenerateAPIKey/GenerateAPIKey.js";
import { DoTheAPIWork } from "../DoTheAPIWork/DoTheAPIWork.js";
import { UpdateAPIUsage } from "../UpdateAPIUsage/UpdateAPIUsage.js";

export async function _edit_gpt_artEndpoint(req, res, stripe) {
  // la clé API présente dans l'URL de requête
  const { apiKey } = req.query;

  // si la clé API n'a pas été fournie dans l'URL de requête
  // l'aventure s'arrête ici. code 400, pas de clé API dispo
  if (!apiKey) {
    // retourne un bon vieux 4xx au client
    res
      .status(400)
      .send(
        "No API key was given, in the request url. Please subscribe to the Maslow API, copy the API key I will give you, and add this API key as a 'apiKey' query parameter, in the request url."
      );

    return;
  }

  // encode la clé API fournie par le client,
  // afin de la comparer a celle stockée dans
  // la base de données des clients de notre API
  const hashedAPIKey = hashAPIKey(apiKey);

  // récupère le stripe customerId de ce client
  const customerIdData = await GetFirestoreDocument({
    documentId: hashedAPIKey,
    collectionName: "APIKeys",
  });

  const customerId = customerIdData?.customerId;

  // récupère les données client liées a cet user/clé API
  const customer = await GetFirestoreDocument({
    documentId: customerId,
    collectionName: "APICustomers",
  });

  // si cette clé API n'existe pas dans notre base de données client,
  if (!customer) {
    // ...alors l'aventure s'arrête ici
    res
      .status(403)
      .send(
        "This API key is invalid/unknown. Please add a valid API key to the request url."
      );

    return;
  }

  // si l'user est inactif/desactivé/timed out...
  else if (!customer.active) {
    // ...alors l'aventure s'arrête ici
    res.status(403).send("This API key is currently inactive/disabled.");

    return;
  }

  // autrement, si cette clé API est valide...
  else {
    // Incrémente/Modifie les données d'utilsaton d'API
    // sur stripe/firebase/etc..., selon besoins.
    // implémente ta logique custom.
    // puis fournit un objet record
    // qui contient des données d'usage d'API,
    // que tu souhaites fournir au client
    const record = await UpdateAPIUsage(req, stripe, customer);

    // avec l'aide des données de requête
    // fournies par le client,
    // fais le boulot que requiert cette API
    // le service que tu souihaites procurer au client
    // ca ce passe ici
    const outputData = await DoTheAPIWork(req);

    // retourne les données, le graal,
    // le caviar kush, ze précieux,
    // pour le client.
    // accompagnées des données d'utilisation d'API
    res
      .status(outputData.status)
      .send({ answer: outputData.data, usage: record });

    return;
  }
}
