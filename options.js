let acNameField = document.getElementById("acName");
let pwField = document.getElementById("pw");
let btn = document.getElementById("saveb");

let handleButtonClick = () => {
  let accountName = acNameField.value;
  let accountPassword = pwField.value;
  chrome.storage.sync.set({ accountName, accountPassword });
};

chrome.storage.sync.get("accountName", ({ accountName }) => {
  acNameField.value = accountName;
});
chrome.storage.sync.get("accountPassword", ({ accountPassword }) => {
  pwField.value = accountPassword;
});

btn.addEventListener("click", handleButtonClick);
