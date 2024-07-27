function encode(words: string[]) {
  return words.join("#");
}

function incode(word: string) {
  return word.split("#");
}

console.log(encode(["neet", "code", "love", "you"]));
console.log(incode("neet#code#love#you"));
