import { URL } from "url";

function getNPMFolderRoot() {
  let npmFolderRoot = new URL(".", import.meta.url).pathname;

  // fix minor annoyance
  if (npmFolderRoot.startsWith("/")) {
    npmFolderRoot = npmFolderRoot.substring(1);
  }

  return npmFolderRoot;
}

export { getNPMFolderRoot };
