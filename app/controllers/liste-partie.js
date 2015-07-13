import Ember from 'ember';

export default Ember.Controller.extend({
	websocket: Ember.inject.service(),
	init: function () {
		let socket = this.get('websocket.socket');
		socket.on('new game', data => {
			if (this.get('session.uid') !== data.owner)
				this.store.find('user', data.owner).then(user => {
					data.owner = user;
					data.id = data._id;
					var game = this.store.push('game', data);
				});
		});
		socket.on('delete game', data => 
			this.store.find('game', data.id).then(g => g.deleteRecord())
		);
		socket.on('new player', data => {
			let R = Ember.RSVP;
			var g, u;
			R.all([
					this.store.find('user', data.player),
					this.store.find('game', data.game)
			]).then(xs => {
				xs[1].get('players').pushObject(xs[0]);
				//this.store.push('game', xs[1]);
			});
		});
	},
	actions: {
		join: function (game) {
			let socket = this.get('websocket.socket')
				, obj = {game: game.get('id'), player: this.get('session.uid')};
			socket.emit('join', obj);
		}
	}
});
