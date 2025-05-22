export function setupOverlay() {
  const chatWindow = document.querySelector('#n8n-chat-widget-2 .chat-window');
  if (chatWindow) {
    chatWindow.classList.add('centered-chat');
    document.getElementById('chat-overlay').style.display = 'block';
  }
}
