var myDataRef = new Firebase('https://tunovendespinas.firebaseio.com/');

$('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          myDataRef.set('User ' + name + ' says ' + text);
          $('#messageInput').val('');
        }
      });