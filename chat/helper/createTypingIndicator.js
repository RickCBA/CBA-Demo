export function createTypingIndicator() {
  // create a <div> element
  const typingDiv = document.createElement('div');
  // Sets the typingDiv class to chat-message-typing-body.
  typingDiv.className = 'chat-message-typing-body';

  // Inside a loop, create 3 <span> elements, each representing a "dot" of the typing animation. These get the class chat-message-typing-circle.
  for (let i = 0; i < 3; i++) {
    const span = document.createElement('span');
    span.className = 'chat-message-typing-circle';
    typingDiv.appendChild(span); // appended each (dot) to the typingDiv.
  }

  return typingDiv;
}
