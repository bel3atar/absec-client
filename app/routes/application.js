import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

var appRoute = Ember.Route.extend(ApplicationRouteMixin);
appRoute.reopen({
	setupController: function (controller) {
	}
});
export default appRoute;
