chrome.app.runtime.onLaunched.addListener(function(){
  newWindow('window-1');
});

function newWindow(id){
  chrome.app.window.create('window.html', {
    id: id
  });
}
