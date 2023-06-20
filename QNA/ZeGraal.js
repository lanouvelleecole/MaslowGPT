// This function will create an npm package with the given package name

import fs from 'fs';

function CreateNPMPackage(pkgName) {
  // Convert package name to camel case
  const camelCaseName = pkgName.replace(/(-\w)/g, m => m[1].toUpperCase());  
  // Create package directory with camel case name
  fs.mkdirSync(`./${camelCaseName}`);
  // Build package.json object
  const pkgJson = {
    name: camelCaseName,
    version: '1.0.0',
    description: '',
    main: 'index.js',
    scripts: {
      test: 'echo "Error: no test specified" && exit 1'
    },
    keywords: [],
    author: '',
    license: 'ISC'
  };
  // Create and write package.json file
  fs.writeFileSync(`./${camelCaseName}/package.json`, JSON.stringify(pkgJson, null, 2));
};

// Export function
export default CreateNPMPackage;