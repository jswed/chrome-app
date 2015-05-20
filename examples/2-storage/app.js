var msgBox = document.getElementById('messages');
var sendBtn = document.getElementById('msg-send');
var clearBtn = document.getElementById('msg-clear');
var input = document.getElementById('msg-input');

function render(msgs){
  msgBox.innerHTML = "";
  msgs.forEach(function(msg){
    var element = document.createElement('li');
    element.innerText = msg;
    msgBox.appendChild(element);
  });
}

// load existing messages
chrome.storage.sync.get('messages', function(items){
  if(items.messages){
    render(items.messages);
  }
});

// re-render when value of messages is changed
chrome.storage.onChanged.addListener(function(changed){
  var msgs = changed.messages ? changed.messages.newValue : null;
  if(msgs){
    render(msgs);
  }
});

// Button handlers

sendBtn.addEventListener('click', function(){
  var msg = input.value;
  if(!!msg){
    chrome.storage.sync.get('messages', function(items){
      var msgs = items.messages;
      if(!(msgs instanceof Array)) {
        msgs = [];
      }
      msgs.push(msg);
      chrome.storage.sync.set({
        'messages': msgs
      });
    });
  }
});

clearBtn.addEventListener('click', function(){
  chrome.storage.sync.set({'messages': []});
});
