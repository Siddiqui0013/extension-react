console.log("background && content script && file structure changed again");chrome.action.onClicked.addListener(e=>{var c;(c=e.url)!=null&&c.includes("amazon.com")&&chrome.tabs.sendMessage(e.id,{action:"toggleSidebar"})});