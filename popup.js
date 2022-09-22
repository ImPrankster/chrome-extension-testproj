let fillIn = document.getElementById("fillIn");

fillIn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fillInInfo,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function fillInInfo() {
  acNameFields = document.getElementsByName("login");
  pwFields = document.getElementsByName("password");
  chrome.storage.sync.get("accountName", ({ accountName }) => {
    acNameFields.forEach((element) => {
      element.value = accountName;
    });
  });
  chrome.storage.sync.get("accountPassword", ({ accountPassword }) => {
    pwFields.forEach((element) => {
      element.value = accountPassword;
    });
  });
}
