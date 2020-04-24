function AppStartBackground() {

  const scripts = [
    "assets/js/extension.start.js",
    "runtime.js",
    "polyfills.js",
    "styles.js",
    "vendor.js",
    "main.js",
  ];

  chrome.browserAction.onClicked.addListener((function (tab) {
    for (const i in scripts) {
      if (!scripts.hasOwnProperty(i)) {
        continue;
      }
      chrome.tabs.executeScript(tab.ib, {
        file: scripts[i]
      });
    }
  }));

}

AppStartBackground();
