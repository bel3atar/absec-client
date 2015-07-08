import Ember from 'ember';

export default Ember.Controller.extend({
	needs: 'newgame',
	game: Ember.computed.alias('controllers.newgame.game'),
	websocket: Ember.inject.service(),
	init: function () {
		let socket = this.get('websocket.socket');
		console.log(this.get('game'));
		socket.on('new player', data => {
			this.decrementProperty('remaining');
		});
	}
});
