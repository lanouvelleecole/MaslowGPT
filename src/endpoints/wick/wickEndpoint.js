import { _wickEndpoint } from "./pieces/_wickEndpoint/_wickEndpoint.js";

// crée un endpoint nommé wick
// reachable via http://localhost:<apiPort>/wick
export function wickEndpoint(app, stripe) {
  app.get("/wick", async (req, res) => {
    try {
      await _wickEndpoint(req, res, stripe);

      return;
    } catch (error) {
      res
        .status(400)
        .send(
          "A problem occurred while trying to use the wick endpoint: " + error
        );

      return;
    }
  });
}
