chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
      id: 'element-to-clipboard',
      title: 'Copy Element Content',
      contexts: ['all'],
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === 'element-to-clipboard') {
      sendMessageWithRetry(tab.id, { action: "copyToClipboard" });
    }
  });
  
  function sendMessageWithRetry(tabId, message, retries = 5, delay = 200) {
    if (retries === 0) {
      console.error('Could not establish connection after multiple retries');
      return;
    }
  
    chrome.tabs.sendMessage(tabId, message, (response) => {
      if (chrome.runtime.lastError) {
        console.warn('Error sending message, retrying...', chrome.runtime.lastError);
        setTimeout(() => {
          sendMessageWithRetry(tabId, message, retries - 1, delay);
        }, delay);
      } else {
        console.log('Message sent successfully', response);
      }
    });
  }
  