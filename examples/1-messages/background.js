chrome.app.runtime.onLaunched.addListener(function(){
  newWindow('window-1');
  chrome.runtime.onMessage.addListener(function(msg){
    var result = msg.match(/new-window:(.*)/);
    if(result) {
      newWindow(result[1]);
    }
  });
});

function newWindow(id){
  chrome.app.window.create('window.html', {
    id: id
  });
}
