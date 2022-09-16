let sentence = document.querySelector("#vowels");
let count = document.querySelector(".count");
const vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
const result = document.querySelector(".result");
let c = 0;

count.addEventListener("click", () => {
  for (let i = 0; i < sentence.value.length; i++) {
    if (vowels.includes(sentence.value[i])) {
      c++;
    }
  }
  result.innerHTML = `there are ${c} vowels`;
});
