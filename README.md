# Modular N8N Chat Widget

A modular, embeddable chat widget that uses `@n8n/chat` widget. Built with clean HTML, JavaScript, and CSS. Includes features:

- Auto-open on first visit
- Toggle button with custom styling
- Refresh chat session button
- Responsive and accessible design
- Canned welcome messages
- Overlay behavior to display/hide the widget

---

## Folder Structure

```
/chat-widget
|── helper/
│   ├── centerChatWindow        # center the chat window on load
|   ├── createTypingIndicator   # Create the 3 bubble loading indicator
│   ├── createTypingMessages    # Create Preloads messages to simulate bot greeting
|   └── createCannedmessages    # Create default array of messages
│
|── index.html                  # Main HTML entry
├── main.js                     # Loads the chat system on page load
├── assets/
│   ├── chat-message-icon-svg.svg   # icon for toggle open the widget chat window
|   └── delete.png                  # icons for toggle close the widget chat window
|
└─- chat/
    ├── initChat.js            # Loads and initializes the N8N chat widget
    ├── setupOverlay.js        # Creates chat overlay container and center the wiget
    ├── toggleButton.js        # Chat open/close toggle button logic
    ├── refreshButton.js       # Optional refresh button logic
    └── cannedMessages.js      # Preloads messages to simulate bot greeting

```

---

## How It Works

### `index.html`

- Mounts 2 Div element containers (`chat-overlay`) and (`n8n-chat-widget-2"`)
- Includes main.js scripts and CSS to launch the widget
- Basic page with minimal markup

---

### `main.js`

- Entry point: ensures DOM is ready
- Generate sessionId using `crypto.randomUUID();
- Calls the following on load:
  - `initChat()` – Initialize the chat widget using `import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';`
  - `setupOverlay()` – Creates DOM element with the dark transparent background and centers the chat widget window
  - `setupToggleButton()` – creates floating chat toggle button and attaches toggle button logic
  - `setupRefreshButton()` – Add manual reload button for chat

---

## Module Responsibilities

### `initChat.js`

- Contains `https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js`
- Uses imported `createChat` and `sessionId` in main.js to initialize chat widget
- Configures theme, avatar, and floating position

### `setupOverlay.js`

- Creates and appends:
  - Checks if `chatWindow` is loaded, add opacity background and center the widget
  - Parent container for overlay
- Ensures container exists before initializing chat

### `toggleButton.js`

- Adds a floating button and click listener that shows/hides the chat
- Uses icon from `/assets/chat-message-icon-svg.svg` and `delete.png`

### `refreshButton.js`

- Adds a circular refresh button on top of chat
- On click, reloads the chat widget preload messages and toggle the button
- Useful for resetting the chat preload

### `cannedMessages.js`

- Exports an array of default welcome messages
- Can be injected into chat automatically (not built-in to N8N, so needs customization)

### `style.css`

- this is where you will find all the styling

### `helper folder`

- helper functions:
  - `centerChatWindow` – function that centers the chat window
  - `createCannedMessage()` – function that creates canned bot messages.
  - `createTypingMessage()` – function that creates preload typing messages
  - `createTypingIndicator()` – utility function used to create typing indicator. Its a modern chat interfaces to show that the bot or user is typing.

---
