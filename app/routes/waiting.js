import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return this.store.find('user', this.get('session.uid')).then(u =>
			this.store.find('game', {owner: u.get('id')}).then(games =>
				games.get('firstObject')
			)
		);
	}
});
