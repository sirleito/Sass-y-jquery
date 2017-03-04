$(function(){
		// Fade in del subtitulo */
	var h4 = $("header h4")
	if(h4.css("display") == "block"){
		h4.hide();
		h4.fadeIn(2500)	
	}

		// Funciones de scroll. Parallax y frappe
	var contenedor = $(".contenedorFrappe").position().top
	var frappe = $("#frappe")
	var posicionFrappe = contenedor * 2
	frappe.css({
		'left': posicionFrappe + 'px'
	})

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  barra * 0.40;
		var frapeFlotante = posicionFrappe - ( barra * 2 )
		$('header').css({
			'background-position': '0 -' + posicion + 'px'
		});
		frappe.css({
			'left': frapeFlotante + 'px'
		})
		if (frapeFlotante <= contenedor) {
		$(frappe).css({
			"display": "block"
			})
		}else{
			$(frappe).css({
			"display": "none"
			})
		}

	})
			//Agrandar los cuadrados*/
		var ancho = parseInt($(".lugar").css("width"))
		var alto = parseInt($(".lugar").css("height"))
		var masAncho = ancho * 1.5
		var masAlto = alto * 1.5

 		$(".lugar").hover(
            function(){
                $(this).animate({ "width" : masAncho, "height" : masAlto });

                if ($(this).attr("class") == "lugar colombiano") { 	
                	$("#pColombiano").css("display", "block")
				}
                if ($(this).attr("class") == "lugar brasileno") { 	
                	$("#pBrasileno").css("display", "block")
                }
                if ($(this).attr("class") == "lugar etiope") { 	
                	$("#pEtiope").css("display", "block")
                }
                if ($(this).attr("class") == "lugar ecuatoriano") { 	
                	$("#pEcuatoriano").css("display", "block")
                }
            },
            function(){
                $(this).animate({ "width" : alto, "height" : ancho });
                $(".lugar p").css("display", "none")
            }
        );  
        //Carrusel*/
 		var contador = 3
 		var izquierda = $("#izquierda")
 		var derecha = $("#derecha")
 		var carrusel = $("#carrusel")

 		izquierda.click(function(){
 			if (contador > 1) {
 				contador --
 			}else{
 				contador =5
 			}
 			fondo()
 		})
 		derecha.click(function(){
 			if (contador < 5) {
 				contador ++
 			}else{
 				contador =1
 			}
 			fondo()
 		})
 		function fondo(){
 			if (contador == 1) {
 				carrusel.css({
 					"background-image": "url('img/carrusel1.jpg')"
 				})
 			}if (contador == 2) {
 				carrusel.css({
 					"background-image": "url('img/carrusel2.png')"
 				})
 			}if (contador == 3) {
 				carrusel.css({
 					"background-image": "url('img/carrusel3.jpg')"
 				})
 			}if (contador == 4) {
 				carrusel.css({
 					"background-image": "url('img/carrusel4.jpg')"
 				})
 			}if (contador == 5) {
 				carrusel.css({
 					"background-image": "url('img/carrusel5.jpg')"
 				})
 			}
 		}
});