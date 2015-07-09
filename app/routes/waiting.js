import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		var g;
		this.store.find('user', this.get('session.uid')).then(u => {
			g = this.store.find('game', {}, {owner: u});
		});
	}
});
