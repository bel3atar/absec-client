/*global Ember */
import Ember from 'ember';

export default Ember.Controller.extend({
	imgurl: null,
	username: null,
	actions: {
		authenticate: function() {
			this.get('session').authenticate(
				'simple-auth-authenticator:torii', 'facebook-connect'
			).then(() => {
				Ember.$.getJSON(
					'https://graph.facebook.com/me', 
					{
							access_token: this.get('session.content.secure.accessToken'),
							fields: 'name,picture'
					}, 
					data => {
						console.log(data);
						window.localStorage.setItem('session', JSON.stringify(data));
						this.store.push('user', {
							id: data.id,
							name: data.name,
							imgurl: data.picture.data.url
						});
					}
				);
			});

		},
	}
});
