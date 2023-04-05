import { exec } from "child_process";

function openVSCode({
  folderPath,
  filePaths,
  onSuccess = null,
  onError = null,
}) {
  if (typeof folderPath !== "string") {
    if (onError) onError(new Error("folderPath must be a string"));
    return;
  }

  filePaths = filePaths.filter((fp) => typeof fp === "string");

  const command = `code ${folderPath} ${filePaths.join(" ")}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      if (onError) onError(error);
      return;
    }

    if (onSuccess) onSuccess();
  });
}

export { openVSCode };
