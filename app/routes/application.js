import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
var route = Ember.Route.extend(ApplicationRouteMixin);
route.reopen({
	model: function () {
		if (this.get('session.isAuthenticated'))
			return this.store.find('user', this.get('session.uid'));
	}
});
export default route;
