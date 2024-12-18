console.log('background && content script && file structure changed again');

chrome.action.onClicked.addListener((tab) => {
    if (tab.url?.includes('amazon.com')) {
      chrome.tabs.sendMessage(tab.id!, { action: 'toggleSidebar' });
    }
  })