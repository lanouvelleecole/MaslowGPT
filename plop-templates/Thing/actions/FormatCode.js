import fs from "fs";
import path from "path";
import { ESLint } from "eslint";

async function FormatCode(filepath) {
  const eslint = new ESLint({
    cwd: path.dirname(filepath),
    fix: true,
  });

  // Read the file contents
  const code = await fs.promises.readFile(filepath, "utf8");

  // Format the code using ESLint
  const results = await eslint.lintText(code, { filePath: filepath });
  await ESLint.outputFixes(results);

  // Write the formatted code back to the file
  await fs.promises.writeFile(filepath, results[0].output, "utf8");
}

export { FormatCode };
