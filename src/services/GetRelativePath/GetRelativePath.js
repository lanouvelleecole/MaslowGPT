function GetRelativePath(path, folderPath) {
  // Replace backward slashes with forward slashes
  path = path.replace(/\\/g, "/");
  folderPath = folderPath.replace(/\\/g, "/");

  // Split the paths into segments
  const pathSegments = path.split("/");
  const folderSegments = folderPath.split("/");

  // Remove common segments from the beginning of both paths
  while (
    pathSegments.length > 0 &&
    folderSegments.length > 0 &&
    pathSegments[0] === folderSegments[0]
  ) {
    pathSegments.shift();
    folderSegments.shift();
  }

  // Build the relative path
  let relativePath = "";
  for (let i = 0; i < folderSegments.length; i++) {
    relativePath += "../";
  }
  relativePath += pathSegments.join("/");

  // Add './' at the beginning if necessary
  if (relativePath[0] !== "/" && relativePath[0] !== ".") {
    relativePath = "./" + relativePath;
  }

  return relativePath;
}

export { GetRelativePath };
