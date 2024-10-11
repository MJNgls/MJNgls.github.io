document.getElementById("check-btn").addEventListener("click", function() {
  const inputBox = document.querySelector(".input-box");
  const inputText = inputBox.value.trim();
  
  if (inputText === "") {
    alert("Please enter some text!");
    return;
  }

  const result = isPalindrome(inputText);
  const resultDiv = document.querySelector(".result");
  resultDiv.textContent = result ? "It's a palindrome!" : "Not a palindrome.";
});

document.getElementById("clear-btn").addEventListener("click", function() {
  const inputBox = document.querySelector(".input-box");
  inputBox.value = "";
  const resultDiv = document.querySelector(".result");
  resultDiv.textContent = "";
});

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}
