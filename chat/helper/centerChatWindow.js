export function centerChatWindow() {
  const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
  if (chatWindow) {
    chatWindow.classList.add('centered-chat');
  }
}
