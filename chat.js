document.addEventListener('DOMContentLoaded', function() {
  const sendBtn = document.getElementById('send-btn');
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  
  sendBtn.addEventListener('click', sendMessage);
  
  async function sendMessage() {
    const message = input.value.trim();
    if (!message) return;
    chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
    input.value = '';
    
    const res = await fetch('/chat', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message})
    });
    const data = await res.json();
    chatBox.innerHTML += `<div><strong>AI:</strong> ${data.reply}</div>`;
  }
});
