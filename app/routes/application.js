import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
var route = Ember.Route.extend(ApplicationRouteMixin);
route.reopen({
	model: function () {
		if (this.get('session').isAuthenticated)  {
			if (this.get('session.secure.authenticator') !== 'simple-auth-authenticator:torii') {
				var sess = this.container
					.lookup("simple-auth-authenticator:jwt")
					.getTokenData(this.get('session.secure').token);
				this.store.push('user', {
					id: sess.uid,
					username: sess.username
				});
			}
		}
	}
});
export default route;
