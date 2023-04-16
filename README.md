# Element to Clipboard

Element to Clipboard is a browser extension that allows you to right-click on any element on a webpage and copy its content to the clipboard.

## Features

- Right-click context menu to copy an element's content.
- Works on any element that contains text.

## Installation

1. Clone this repository.
2. Follow the instructions for your browser to load the extension:
   - [Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest)
   - [Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Usage

1. Navigate to any webpage.
2. Right-click on the element you want to copy the content from.
3. Choose "Copy Element Content" from the context menu.
4. The content of the clicked element is now copied to your clipboard.

## Project Structure

- `manifest.json`: The manifest file for the extension.
- `background.js`: The background script that sets up the context menu and handles clicks.
- `inject.js`: The content script that gets injected into the webpage and handles copying the element content to the clipboard.
- `icon.png`: The extension's icon.

## Contributing

1. Fork the repository.
2. Create a new branch with your changes.
3. Submit a pull request.

Please feel free to submit issues, feature requests, or improvements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
Icon made by Freepik from www.flaticon.com
