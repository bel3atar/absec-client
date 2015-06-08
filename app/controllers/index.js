import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

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
					this.store.createRecord('user', {
						id: sess.uid,
						username: sess.username
					});
				});

		},

		authenticate: function() {
			this.get('session').authenticate(
				'simple-auth-authenticator:torii', 'facebook-connect'
			).then(() => {
				this.transitionToRoute('liste_partie');
				Ember.$.getJSON(
					'https://graph.facebook.com/me', 
					{
							access_token: this.get('session.content.secure.accessToken'),
							fields: 'name,picture'
					}, 
					data => {
						this.set('session.imgurl', data.picture.data.url);
						this.set('session.username', data.name);
					}
				);
			});
		},

	}

});
