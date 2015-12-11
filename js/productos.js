var myDataRef = new Firebase('https://tunovendespinas.firebaseio.com/');

myDataRef.on("value", function(snapshot) {
	//console.log(snapshot)
  data = snapshot.val();
  
  productos_ropa = snapshot.child("categorias/ropa/productos").val();

  productos_ropa.forEach(function(producto){
  	if(producto.descripcion == "calcetines Piña"){
  		$("#myModalLabel").html(producto.descripcion);
  		console.log($("#myModalLabel"))
  		console.log(producto.descripcion)
  		$(".detalle-precio h3").text("$ " + producto.precio);
  		console.log("RUJNNNN")
  	}

  });
});