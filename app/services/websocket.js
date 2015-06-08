import Ember from 'ember';

export default Ember.Service.extend({
	_setup: function () {
		let socket = this.socket = io('http://localhost:3000/');
	}.on('init'),
});
