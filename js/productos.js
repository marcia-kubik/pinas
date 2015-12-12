var myDataRef = new Firebase('https://tunovendespinas.firebaseio.com/');

myDataRef.on("value", function(snapshot) {
  var data = snapshot.val();
  // productos_ropa = snapshot.child("categorias/ropa/productos").val();

  var productos = data.categorias.accesorios.productos
  var template = $('.thumb');
  var grid = $('#grid');

  var counter_id = 0;
  	//grid.masonry({itemSelector:'.img_thumb'})

  productos.forEach(function(producto){
  	var item = template.clone();
  	console.log("trabajando con" + producto.nombre)
  	item.removeClass('template');
  	item.attr('id', 'item' + counter_id++);
  	item.find(".grid-nombre").text(producto.nombre)
  	item.find('.grid-imagen').attr('src', producto.imagen)
  	grid.append(item);
  	
  });
  activar_hover()


});


  function cargar_detalle(productos){
  	productos.forEach(function(producto){
  	if(producto.nombre == "Calcetines Piña"){
  		$("#nombre").text(producto.nombre);
  		$("#descripcion").text(producto.descripcion);
  		$("#precio").append(producto.precio+'.<sup>00<sup>')
  		$("#imagen").attr("src", producto.imagen);


  	}

  });
  }

  function activar_hover(){
  	console.log("jhgjhgjh")
  	$('.img_thumb').hover( function(){
    target = $(this);
    console.log(target)
    target.find(".img_desc").first().fadeIn(200);
}, function(){
    target = $(this);
    $(target[0].firstElementChild).fadeOut(200);
});
  }