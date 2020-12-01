

class Ticket{
	number = '';


	constructor(){
		this.number = Math.random();
	}


	toHtml(tag){
		if (tag == 'li') return '<li class="list-group-item">'+this.number+'</li>';
	}

	


}