var roulette;
jQuery(document).ready(function($) {
	roulette = new Roulette();



	$('#add_user').click(function(event) {
		event.preventDefault(); // prevenimos de ejecutar la función por defecto del botón
		console.log('registramos un usuario nuevo:'); 

		//Obtenemos los valores del formulario
		var name = $('#user_name').val();
		var num_tickets = $('#num_tickets').val();
		console.log('nombre:' + name + ' num papeletas: ' + num_tickets);
		
		//registramos usuario
		var u = new User(name);
		roulette.addUser(u, num_tickets);

		console.log('añadido');
	});

});



