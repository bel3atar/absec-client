import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

var r = Ember.Route.extend(AuthenticatedRouteMixin);
r.reopen({
	model: function () {
		return this.store.find('game');
	}
});
export default r;
