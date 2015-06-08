import Ember from 'ember';

export default Ember.Controller.extend({
	websocket: Ember.inject.service(),
	init: function () {
		let socket = this.get('websocket.socket');
		socket.on('new game', data => {
			this.store.find('user', data.owner).then(user => {
				data.owner = user;
				data.id = data._id;
				var game = this.store.push('game', data);
			});
		});
	}
});
