import { Settings } from "./Context";

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const specialChars = "!@#$%^&*()_+~`|}{[]\\:;?></-=";
const numberChars = "0123456789";

const createPassword = (settings: Settings): string => {
  let allChars = "";
  if (settings.digit) {
    allChars += numberChars;
  }
  if (settings.upperCase) {
    allChars += uppercaseChars;
  }
  if (settings.lowerCase) {
    allChars += lowercaseChars;
  }
  if (settings.special) {
    allChars += specialChars;
  }
  const allCharsLength = allChars.length;
  const password: string[] = [];
  const randomValues = new Uint32Array(settings.length);
  window.crypto.getRandomValues(randomValues);
  for (let i = 0; i < settings.length; i++) {
    const randomIndex = randomValues[i] % allCharsLength;
    password.push(allChars[randomIndex]);
  }
  return password.join("");
};

const checkRequirements = (requirements: Settings, password: string): boolean => {
  if (requirements.digit && ![...password].some((char) => numberChars.includes(char))) {
    return false;
  }
  if (requirements.lowerCase && ![...password].some((char) => lowercaseChars.includes(char))) {
    return false;
  }
  if (requirements.upperCase && ![...password].some((char) => uppercaseChars.includes(char))) {
    return false;
  }
  if (requirements.special && ![...password].some((char) => specialChars.includes(char))) {
    return false;
  }
  return true;
};

const GeneratePassword = (settings: Settings): string => {

  let password = createPassword(settings).toString();
  while (!checkRequirements(settings, password)) {
    password = createPassword(settings).toString();
  }
  return password;
};

export default GeneratePassword;
