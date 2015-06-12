import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		/* CREDENTIALS */
		login: function () {
			this.get('session')
				.authenticate(
					'simple-auth-authenticator:jwt', {
						identification: this.get('username'),
						password: this.get('password')
					})
				.catch(err => alert(err))
				.then(() => {
					var sess = this.container
						.lookup("simple-auth-authenticator:jwt")
						.getTokenData(this.get('session.secure').token);
					this.set('session.uid', sess.uid);
					this.store.createRecord('user', {
						id: sess.uid,
						username: sess.username
					});
				});

		},
		/* FACEBOOK */
		authenticate: function() {
			this.get('session').authenticate(
				'simple-auth-authenticator:torii', 'facebook-connect'
			).then(() => {
				this.transitionToRoute('liste_partie');
				Ember.$.getJSON(
					'https://graph.facebook.com/me', 
					{
							access_token: this.get('session.content.secure.accessToken'),
							fields: 'name,id'
					}, 
					data => {
						var user = this.store.createRecord('user', {
							username: data.name,
							fbid: data.id
						});
						user.save().then(() => {;
							this.set('session.username', data.name);
							this.set('session.uid', user.get('id'));
						});
					}
				);
			});
		},

	}

});
