import path from "path";

const createPLOPAdds = ({
  hbsFiles,
  templateFolderPathFromAppRoot,
  creationFolderFromAppRoot,
}) => {
  return hbsFiles.map((hbsFile) => {
    return {
      type: "add",
      path: path.join(
        process.cwd(),
        creationFolderFromAppRoot,
        hbsFile.filePathFromAppRoot
      ),
      templateFile: path.join(
        templateFolderPathFromAppRoot,
        hbsFile.hbsFilePathFromAppRoot
      ),
    };
  });
};

export { createPLOPAdds };
