import Ember from 'ember';

export default Ember.Controller.extend({
	websocket: Ember.inject.service(),
	init: function () {
		let socket = this.get('websocket.socket');
		console.log(this.get('game'));
		socket.on('new player', data => {
			this.decrementProperty('remaining');
		});
	}
});
