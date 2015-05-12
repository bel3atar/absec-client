import Ember from 'ember';

export default Ember.Controller.extend({
	imgurl: null,
	username: null,
	actions: {
		authenticate: function() {
			this.get('session').authenticate(
				'simple-auth-authenticator:torii', 'facebook-connect'
			).then(_ => {
				jQuery.getJSON(
					'https://graph.facebook.com/me', 
					{
							access_token: this.get('session.content.secure.accessToken'),
							fields: 'name,picture'
					}, 
					data => {
						this.set('imgurl', data.picture.data.url);
						this.set('username', data.name);
						window.localStorage.setItem('session', JSON.stringify(data));
					}
				);
			});

		},
	}
});
