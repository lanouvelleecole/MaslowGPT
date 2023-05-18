import path from "path";

const createPLOPAdds = ({
  hbsFiles,
  templateFolderPathFromAppRoot,
  creationFolderFromAppRoot,
}) => {
  return hbsFiles.map((hbsFile) => {
    const plopFileAdd = {
      type: "add",
      force: true,
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

    return plopFileAdd;
  });
};

export { createPLOPAdds };
