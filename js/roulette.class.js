

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

	getUsers(){
		return this.users;
	}


	game(){
		var win = Math.round(Math.random() * this.tickets.length);
		return this.tickets[win];
	}


	findWinner(num_win){
		var winner = null;
		for (var i = 0; i < this.users.length; i++){
			if(this.users[i].isWinner(num_win)){
				winner = this.users[i];
			}
		}
		return winner;
	}
}