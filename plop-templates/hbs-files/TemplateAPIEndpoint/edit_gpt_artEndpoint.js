import { _edit_gpt_artEndpoint } from "./pieces/_edit_gpt_artEndpoint/_edit_gpt_artEndpoint.js";
import { SetupMulter } from "./pieces/SetupMulter/SetupMulter.js";

// Set up Multer storage using diskStorage
const upload = SetupMulter();

// Create an endpoint named edit_gpt_art
// reachable via http://localhost:<apiPort>/edit_gpt_art
export function edit_gpt_artEndpoint(app, stripe) {
  app.post("/edit_gpt_art", upload.single("photo"), async (req, res) => {
    try {
      await _edit_gpt_artEndpoint(req, res, stripe);

      return;
    } catch (error) {
      res
        .status(400)
        .send(
          "A problem occurred while trying to use the edit_gpt_art endpoint: " +
            JSON.stringify(error, null, 2)
        );

      return;
    }
  });
}
