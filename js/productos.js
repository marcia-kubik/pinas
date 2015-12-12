
global_data = null;
global_productos = null;
var myDataRef = new Firebase('https://tunovendespinas.firebaseio.com/');
myDataRef.on("value", function(snapshot) {
  var data = snapshot.val();
  global_data = data;
  // productos_ropa = snapshot.child("categorias/ropa/productos").val();

  var productos_accesorios = data.categorias.accesorios.productos
  var productos_ropa = data.categorias.ropa.productos
  var productos_comida = data.categorias.comida.productos
  var productos_decoracion = data.categorias.decoracion.productos

  var productos = productos_decoracion.concat(productos_ropa).concat(productos_comida).concat(productos_accesorios)
  console.log(productos.length)
  global_productos = productos;

  var template = $('.thumb');
  var grid = $('#grid');

  var counter_id = 0;

  productos.forEach(function(producto){
  	var item = template.clone();
  	// console.log("trabajando con" + producto.nombre)
  	item.removeClass('template');
  	item.attr('id', 'item' + counter_id++);
  	item.find(".grid-nombre").text(producto.nombre);
  	item.find('.img_desc').attr('data-nombre', producto.nombre);
  	item.find('.grid-imagen').attr('src', producto.imagen);
  	item.find('.grid-precio').text(producto.precio);

  	grid.append(item);
  	activar_hover();
  	
  });
});
  function cargar_detalle(e){
  	// console.log(e)
  		elem = $(e);
  		console.log(elem)
  		nombre = elem.data("nombre");
  		console.log(nombre);
  		console.log("RUNNINNNG")
    	global_productos.forEach(function(producto){
    	if(producto.nombre == nombre ){
    		$("#nombre").text(producto.nombre);
    		$("#descripcion").text(producto.descripcion);
    		$("#precio").html(producto.precio+'.<sup>00<sup>')
    		$("#imagen").attr("src", producto.imagen);
    	}
    });
    }

    function activar_hover(){
    	$('.thumb').hover( function(){
	      target = $(this);
	      // console.log(target)
	      target.find(".img_desc").first().fadeIn(200);
	      target.find(".img_desc").first().fadeIn(200);
  		}, function(){
	      target = $(this);
	      $(target[0].firstElementChild).fadeOut(200);
	      console.log('yesyesyes')
  });
    }