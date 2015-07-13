import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

var r = Ember.Route.extend(AuthenticatedRouteMixin);
r.reopen({
	model: function () {
		return this.store.find('game');
			//.filter('game', g => g.get('owner.id') !== this.get('session.uid'));
	}
});
export default r;
