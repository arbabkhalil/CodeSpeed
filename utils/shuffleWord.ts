import easy_en from "./easy_en.json";
import k8s from "./k8s.json";
import py from "./py.json";
import linux from "./linux.json";

export const shuffleWord = (maxWord: number, language: string) => {

  let shuffledWord;
  switch (language) {
    case "easy_en":
      shuffledWord = easy_en.slice(0);
      break;
    case "py":
      shuffledWord = py.slice(0);
      break;
    case "linux":
      shuffledWord = linux.slice(0);
      break;
    default:
      shuffledWord = k8s.slice(0);
      break;
  }
  for (let i = shuffledWord.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = shuffledWord[i];
    shuffledWord[i] = shuffledWord[j];
    shuffledWord[j] = temp;
  }
  return shuffledWord.slice(0, maxWord);
};
