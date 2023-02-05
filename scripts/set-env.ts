// Setup scrpit to read .env file a add variables to nodeJS process.env
// and then update the environment.ts file
const { writeFile } = require('fs');
require('dotenv').config();

const targetPath = `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
   DATE_URL: "${process.env['DATE_URL']}",
   SSSH_KEY: "${process.env['SSSH_KEY']}"
};
`;

writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
