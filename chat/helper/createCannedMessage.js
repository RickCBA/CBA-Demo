export function createCannedMessage() {
  const div = document.createElement('div');
  div.className = 'chat-message chat-message-from-bot my-canned-bot-message';
  div.innerHTML = `
      <div style="position: relative;">
        <div class="canned-messages-grid">
        <button data-message="How do you help?" data-send="Describe the scale of the problem and how you solve it!">How do you help?</button>
        <button data-message="How do you close leads?" data-send="Can you explain the impact of delayed engagement on leads and closure rates and how you solve that problem?">How do you close leads?</button>
        <button data-message="How do i sign up for beta?" data-send="Hi, Can you explain the process for registering my interest?">How do i sign up for beta?</button>
        <button data-message="I value the personal touch" data-send="How do you balance AI and automation with a personal touch?">I value the personal touch</button>
        </div>
      </div>`;
  return div;
}
