var myDataRef = new Firebase('https://tunovendespinas.firebaseio.com/');

myDataRef.on("value", function(snapshot) {
  data = snapshot.val();
  
  productos_ropa = snapshot.child("categorias/ropa/productos").val();

  productos_ropa.forEach(function(producto){
  	if(producto.nombre == "Calcetines Piña"){
  		$("#nombre").text(producto.nombre);
  		$("#descripcion").text(producto.descripcion);
  		$("#precio").append(producto.precio+'.<sup>00<sup>')
  	}

  });
});