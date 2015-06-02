import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		newgame: function () {
			console.log(this.get('nplayers'));
		}
	}
});
