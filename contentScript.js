(() => {
  let previousLyrics = ""

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type } = obj;
    
    console.log("Hello world");
    // Delay before running the function so it loads up
    setInterval(() => {
      currentLyrics = document.getElementsByClassName("arY01KDGhWNgzlAHlhpd")[0]
        if (currentLyrics && currentLyrics != previousLyrics) {
          navigator.clipboard.writeText(currentLyrics.innerHTML);
          previousLyrics = currentLyrics;
          console.log(currentLyrics.innerHTML);
        }
    }, 500);
  });
})();

const copyToClipboard = (text) => {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}