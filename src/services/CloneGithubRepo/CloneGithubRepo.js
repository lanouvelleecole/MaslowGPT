/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

import clone from "git-clone/promise.js";

export async function CloneGithubRepo(repoUrl, destPath) {
  try {
    await clone(repoUrl, destPath);
    return destPath;
  } catch (error) {
    return null;
  }
}
