import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		this.store.unloadAll('game');
		return this.store.find('game');
	}
});
