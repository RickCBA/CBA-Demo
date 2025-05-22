import { centerChatWindow } from './helper/centerChatWindow.js';

export function setupToggleButton() {
  const overlay = document.getElementById('chat-overlay');
  const chatToggleButton = document.querySelector(
    '#n8n-chat-widget-2 .chat-window-toggle'
  );

  let manualClicked = false;
  let chatOpened = false;

  chatToggleButton.addEventListener('click', () => {
    manualClicked = true;
    chatOpened = !chatOpened;
    overlay.style.display = chatOpened ? 'block' : 'none';
    if (chatOpened) {
      // Optionally add logic for when chat opens
    } else {
      // Optionally add logic for when chat closes
    }
  });
}
