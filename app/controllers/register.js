import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		register: function() {
			console.log(this.get('identification'));
		}
	}
});
