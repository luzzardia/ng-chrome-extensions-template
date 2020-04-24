function Roll20AppStartBackground() {

  const scripts = [
    "assets/js/app-start.js",
    "runtime-es2015.js",
    // "runtime-es5.js",
    // "polyfills-es5.js",
    "polyfills-es2015.js",
    "styles-es2015.js",
    // "styles-es5.js",
    "vendor-es2015.js",
    // "vendor-es5.js",
    "main-es2015.js",
    // "main-es5.js"
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

Roll20AppStartBackground();
