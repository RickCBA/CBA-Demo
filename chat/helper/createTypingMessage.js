export function createTypingMessage() {
  const el = document.createElement('div');
  el.className =
    'chat-message chat-message-from-bot my-canned-bot-message chat-message-typing chat-message-typing-animation-bouncing';
  el.innerHTML = `<div style="position: relative; font-family: 'Boxly', sans-serif;"></div>`;
  el.style.minHeight = '24';
  return el;
}
