	$(document).ready(function() { 

		$('.imagen-proyecto').on('click', function() { 

			var rutaImagen = $(this).attr('src');
			var modal = '<div class="modal" id="modal"><img src="'+ rutaImagen +'"><div class="btn-cerrar" id="btnCerrar"><i class="fa-sharp fa-solid fa-xmark"></i></div></div>';

			$('#proyectos').after(modal);

			$('#btnCerrar').on('click', function() { $('#modal').remove(); });

			$('#modal').on('click', function() { $('#modal').remove(); });

		});

		$(document).on('keyup', function(e) { 
			if (e.which==27) { $('#modal').remove(); }
		});
	});

































