import { createCannedMessage } from './helper/createCannedMessage.js';
import { createTypingIndicator } from './helper/createTypingIndicator.js';
import { createTypingMessage } from './helper/createTypingMessage.js';

export async function getInitialMessages() {
  setTimeout(() => {
    const chatMessagesList = document.querySelector(
      '#n8n-chat-widget-2 .chat-body .chat-messages-list'
    );
    if (chatMessagesList) {
      const message = createTypingMessage();
      const message2 = createTypingMessage();
      const cannedMsgDiv = createCannedMessage();
      const typingDiv = createTypingIndicator();
      const typingDiv2 = createTypingIndicator();

      // Insert first message: with typing indicator
      message.appendChild(typingDiv);
      if (chatMessagesList && chatMessagesList.firstChild) {
        chatMessagesList.insertBefore(message, chatMessagesList.firstChild);
      }

      //  Replace typing in first message, insert second message with typing
      setTimeout(() => {
        message.removeChild(typingDiv);
        message.classList.remove(
          'chat-message-typing',
          'chat-message-typing-animation-bouncing'
        );
        message.innerHTML = `<p style="margin: 0; font-style: italic;">*We may store personal data and use it to contact you to support your dental needs.See <a href="https://www.sharplesdental.co.uk/privacy-policy" target="_blank" style="color: inherit; text-decoration: underline;">Privacy Policy</a>* </p>`;

        // First message: typing indicator
        message2.appendChild(typingDiv2);

        if (
          chatMessagesList &&
          chatMessagesList.firstChild.nextSibling.nextSibling
        ) {
          chatMessagesList.insertBefore(
            message2,
            chatMessagesList.firstChild.nextSibling
          );
        }
      }, 3500);

      //  Replace typing in second message
      setTimeout(() => {
        message2.removeChild(typingDiv2);
        message2.classList.remove(
          'chat-message-typing',
          'chat-message-typing-animation-bouncing'
        );
        message2.innerHTML = `<p style="margin: 0"> Hello, Welcome to Sharples Dental Alan here to assist you!</p>`;
      }, 4500);

      // Show canned message options and enable scroll-Y automatically
      setTimeout(() => {
        const chatWindow = document.querySelector(
          '#n8n-chat-widget-2 .chat-body'
        );
        if (cannedMsgDiv && chatMessagesList && chatWindow) {
          chatMessagesList.insertBefore(
            cannedMsgDiv,
            chatMessagesList.firstChild.nextSibling.nextSibling
          );
        }

        chatWindow.scrollTop = chatWindow.scrollHeight;
      }, 5000);

      //grid canned-Messages button
      const buttons = cannedMsgDiv.querySelectorAll(
        '.canned-messages-grid button'
      );
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          const messageText = button.getAttribute('data-send');
          const chatInputField = document.querySelector(
            '#n8n-chat-widget-2 textarea'
          );
          if (chatInputField) {
            chatInputField.value = messageText;
            chatInputField.dispatchEvent(new Event('input', { bubbles: true }));

            // delay to give widget time to activate send button
            setTimeout(() => {
              const sendButton = document.querySelector(
                '#n8n-chat-widget-2 .chat-footer button'
              );
              if (sendButton) sendButton.click();
            }, 150);
          }
        });
      });
    }
  }, 500);
}
