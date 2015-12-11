var myDataRef = new Firebase('https://tunovendespinas.firebaseio.com/');

myDataRef.child(3).on("precio", function(snapshot) {
  alert(snapshot.val());  
});