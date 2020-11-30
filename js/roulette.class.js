

class Roulette{
	users = [];
	tickets = [];


	constructor(){}


	addUser(u, nt){
		nt = nt || 1;
		this.users.push(u);

		for (var i = 0; i < nt; i++) {
			var t = new Ticket();
			u.addTicket(t);
			this.tickets.push(t);
		}
	}
}