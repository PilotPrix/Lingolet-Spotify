chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url === "https://open.spotify.com/lyrics") {
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
    });
  }
})