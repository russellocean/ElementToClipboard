console.log("Injecting script");

// Store the last clicked element
let lastClickedElement = null;

// Listen for the right-click event (button 2) and store the target element
document.addEventListener('mousedown', function (event) {
  if (event.button === 2) {
    lastClickedElement = event.target;
  }
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "copyToClipboard") {
    copyElementContentToClipboard(lastClickedElement);
  }
});

/**
 * Copy the content of the given element to the clipboard.
 * @param {HTMLElement} element - The element whose content will be copied to the clipboard.
 */
async function copyElementContentToClipboard(element) {
  console.log('Copying element content to clipboard', element);

  const content = element.textContent || "";
  try {
    await navigator.clipboard.writeText(content);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Error copying content to clipboard', err);
  }
}