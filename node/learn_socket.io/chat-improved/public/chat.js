// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');
      feedback = document.getElementById('feedback');

// Emit events
btn.addEventListener('click', function(){
  fireMessage();
});
message.addEventListener('keyup', function(event) {
  // If enter pushed--> send message
  if (event.keyCode === 13) {
    fireMessage();
  }
});
message.addEventListener('keypress', function(){
  socket.emit('typing', handle.value);
  console.log('writing..');
});
// Listen for events
socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
    updateScroll();
});

socket.on('typing', function(data){
  feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
  updateScroll();
});
function updateScroll(){
  var element = document.getElementById("chat-window");
    element.scrollTop = element.scrollHeight;
}
function fireMessage(){
  socket.emit('chat', {
      message: message.value,
      handle: handle.value
  });
  message.value = "";
}
