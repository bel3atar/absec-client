import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newgame: function () {
			var uid = this.container
				.lookup("simple-auth-authenticator:jwt")
				.getTokenData(this.get('session.secure').token).uid;
			this.store.find('user', uid).then(user => {
				var game = this.getProperties('blind', 'nplayers');
				game.owner = user;
				this.store.createRecord('game', game).save().then(() => {
						this.transitionToRoute('liste_partie');
				}).catch(() => this.transitionToRoute('liste_partie') );
			});
		}
	}
});
