const list = [
  "*://*.facebook.com/*", 
  "*://*.reddit.com/*", 
  "*://*.twitter.com/*",
  "*://*.youtube.com/*",
  "*://*.instagram.com/*",
  "*://*.onlyfans.com/*",
  "*://*.tiktok.com/*"
]

const url = "http://www.google.com/"

chrome.webRequest.onBeforeRequest.addListener(function(details) {
    return { redirectUrl: url };
}, { urls: list }, ["blocking"]);
