import Ember from 'ember';

export default Ember.Controller.extend({
	websocket: Ember.inject.service(),
	init: function () {
		let socket = this.get('websocket.socket');
	}
});
