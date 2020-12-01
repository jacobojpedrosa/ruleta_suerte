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
		roulette.addUser(u, num_tickets); //lo tenemos registrado

		console.log('añadido');

		//Mostrar usuarios
		/**
		Tenemos dos opciones:
		- Añadir un elemento a la lista con el último usuario
		- Actualizar la lista entera con todos los usuarios registrados
		**/

		//Añadir último usuario
		//$('.lista_usuarios ul.list-group').append('<li class="list-group-item">'+u.name+'  <span class="num_tickets float-right font-weight-bold">'+u.tickets.length+'</span></li>');

		//Actualizamos listado entero usuarios
		//roulette.users
		var users_html = '';
		for (var i = 0; i < roulette.users.length; i++) {
			users_html += roulette.users[i].toHtml('li');

		}
		$('.lista_usuarios ul.list-group').html(users_html);
	});

	$('#play_game').click(function(event) {
		console.log('nueva partida');

		// 1.- Escoger ticket ganador
		var ticket_win = roulette.game()
		console.log(ticket_win);


		// 2.- Buscar que usuario tiene ese ticket
		var winner = roulette.findWinner(ticket_win.number);
		console.log(winner);


		// 3.- Mostrar usuario
		$('.roulette').html('<h2>El ganador es....</h2><h1>'+winner.name+'</h1>');


	});

});














