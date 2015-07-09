import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newgame: function () {
			var uid = this.get('session.uid');
			this.store.find('user', uid).then(user => {
				var game = this.getProperties('blind', 'nplayers');
				game = this.store.createRecord('game', game);
				game.set('owner', user);
				game.get('players').pushObject(user);
				game.save().then((saved) => {
					this.transitionToRoute('waiting');
				});
			});
		}
	}
});
