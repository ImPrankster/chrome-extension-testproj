let accountName = "";
let accountPassword = "";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ accountName, accountPassword });
});
