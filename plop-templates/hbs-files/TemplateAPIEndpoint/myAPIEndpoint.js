import { _myAPIEndpoint } from "./pieces/_myAPIEndpoint/_myAPIEndpoint.js";

// crée un endpoint nommé myAPI
// reachable via http://localhost:<apiPort>/myAPI
export function myAPIEndpoint(app, stripe) {
  app.get("/myAPI", async (req, res) => {
    try {
      await _myAPIEndpoint(req, res, stripe);

      return;
    } catch (error) {
      res
        .status(400)
        .send(
          "A problem occurred while trying to use the myAPI endpoint: " + error
        );

      return;
    }
  });
}
