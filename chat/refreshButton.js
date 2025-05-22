export function refreshButton(getInitialMessages) {
  setTimeout(() => {
    const chatWidget = document.querySelector('.chat-layout.chat-wrapper');
    if (chatWidget) {
      const refreshButton = document.createElement('button');
      refreshButton.className = 'custom-adjacent-refresh-button';
      refreshButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="2">
      <path d="M23 4v6h-6M1 20v-6h6"/>
      <path d="M3.5 9a9 9 0 0 1 14-5.5L23 10M1 14l4.5 4.5A9 9 0 0 0 20.5 15"/>
    </svg>
  `;

      chatWidget.insertAdjacentElement('afterend', refreshButton);
      refreshButton.addEventListener('click', ($event) => {
        $event.stopPropagation();
        const userMsgs = document.querySelectorAll(
          '.chat-message.chat-message-from-user'
        );
        const botMsgs = document.querySelectorAll(
          '.chat-message.chat-message-from-bot'
        );
        [...userMsgs, ...botMsgs].forEach((el) => el.remove());
        getInitialMessages(); // get initial preload messages
      });
    }
  }, 1500);
}
