


export abstract class HelperHash {
  // Those chars are easy for users to remember
  allowedCharsUrl : string[] = [
    "0",
    "1",
    "2",
    // "3",
    // "4",
    // "5",
    // "6",
    // "7",
    // "8",
    // "9",
    // "A",
    // "B",
    // "C",
    // "D",
    // "E",
    // "F",
    // "G",
    // "H",
    // "I",
    // "J",
    // "K",
    // "L",
    // "M",
    // "N",
    // "O",
    // "P",
    // "Q",
    // "R",
    // "S",
    // "T",
    // "U",
    // "V",
    // "W",
    // "X",
    // "Y",
    // "Z",
    // "a",
    // "b",
    // "c",
    // "d",
    // "e",
    // "f",
    // "g",
    // "h",
    // "i",
    // "j",
    // "k",
    // "l",
    // "m",
    // "n",
    // "o",
    // "p",
    // "q",
    // "r",
    // "s",
    // "t",
    // "u",
    // "v",
    // "w",
    "x",
    // "y",
    // "z"
  ];

  // The idea of that function is so we don't need to create big hash's
  // when we don't have a bunch of registeres sites
  
  // Even if we had 16 million registers, the hash would be only 4 letters
  //  since we got 64 possibilities for every char  (64 ** 4 equals 16.777.216)
  intToHash(valueInt : number) : string {
    const hashedIntChars : string[] = [];

    if(valueInt <= 0) {
      throw new Error("valor inválido para transformar em hash");
    }
    
    let currentIntValue = valueInt - 1;
    
    while (currentIntValue > 0) {
      const rest = currentIntValue % this.allowedCharsUrl.length;
      currentIntValue = Math.floor(currentIntValue / this.allowedCharsUrl.length);

      hashedIntChars.push(this.allowedCharsUrl[rest])
    }

    return hashedIntChars.reverse().join("");
  }

}