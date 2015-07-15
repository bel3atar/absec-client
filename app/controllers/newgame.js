import Ember from 'ember';

export default Ember.Controller.extend({
	websocket: Ember.inject.service(),
	actions: {
		newgame: function () {
			var uid = this.get('session.uid');
			this.store.find('user', uid).then(user => {
				var game = this.getProperties('blind', 'nplayers');
				game = this.store.createRecord('game', game);
				game.set('owner', user);
				game.get('players').pushObject(user);
				game.save().then(g => {
					this.get('websocket.socket').emit('create game', g.get('id'));
					this.transitionToRoute('waiting');
				});
			});
		}
	}
});
