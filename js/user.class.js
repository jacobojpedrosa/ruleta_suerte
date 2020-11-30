

class User{
	name = '';
	tickets = [];


	constructor(name){
		this.name = name;
	}

	addTicket(t){
		this.tickets.push(t);
	}
}