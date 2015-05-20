var messages = document.getElementById('messages');
var sendBtn = document.getElementById('msg-send');
var input = document.getElementById('msg-input');

chrome.runtime.onMessage.addListener(function(msg){
  var msgLi = document.createElement('li');
  msgLi.innerText = msg;
  messages.appendChild(msgLi);
});
sendBtn.addEventListener('click', function(){
  var msg = input.value;
  if(!!msg){
    chrome.runtime.sendMessage(msg);
  }
});
