

class User{
	name = '';
	tickets = [];


	constructor(name){
		this.name = name;
	}

	addTicket(t){
		this.tickets.push(t);
	}

	isWinner(num_ticket){
		var w = false; //flag que define si es ganador o no
		for (var i = 0; i < this.tickets.length; i++) {
			if(this.tickets[i].number == num_ticket){
				w = true;
			}
		}
		return w;
	}

	toHtml(tag){
		if(tag == 'li'){
			var html = '<li class="list-group-item">'+this.name+'  <span class="num_tickets float-right font-weight-bold">'+this.tickets.length+'</span>';
			html += '<ul class="list-group" style="display:none;">';
			for (var i = 0; i < this.tickets.length; i++) {
				html += this.tickets[i].toHtml('li');
			}
			html += '</ul>';
			html += '</li>';
			return html;
		}
	}
}