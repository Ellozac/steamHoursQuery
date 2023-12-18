import readline from 'readline';
import fs from 'fs';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function getUserInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}


async function getUserInputs() {
  const steamUsername = await getUserInput('Enter your Steam username: ');
  const password = await getUserInput('Enter your password: ');
  const pathToChrome = (await getUserInput('Enter the path to Chrome Executable: ')).replace(/\\/g, '\\\\');


  const envContent = `STEAMUSERNAME = "${steamUsername}"\nPASSWORD = "${password}"\nPATHTOCHROME = "${pathToChrome}"\n`;


  const envFilePath = '.env';
  fs.writeFileSync(envFilePath, envContent);

  console.log(`Your .env file has been created at ${process.cwd()}/${envFilePath}`);
  rl.close();
}


getUserInputs();
