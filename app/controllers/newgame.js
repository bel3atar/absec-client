import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newgame: function () {
			var uid = this.get('session.uid');
			this.store.find('user', uid).then(user => {
				var game = this.getProperties('blind', 'nplayers');
				game.owner = user;
				game = this.store.createRecord('game', game);
				game.save().then((saved) => {
					console.log(`game save with nplayers = `, saved.get('nplayers'));
					saved.set('remaining', saved.get('nplayers') - 1);
					console.log(`game save with remaining = `, saved.get('remaining'));
					this.set('game', saved);
					this.transitionToRoute('waiting');
				});
			});
		}
	}
});
