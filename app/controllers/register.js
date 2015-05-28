import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		register: function() {
			if (this.get('password') === this.get('passwordConfirmation')) {
				var user = this.store.createRecord('user', {
					username: this.get('username'),
					password: this.get('password')
				});
				user.save().then(() => {
					this.transitionToRoute('index');
				}).catch(err => { 
					if (err.status !== 200) 
						alert(err.responseJSON.message); 
				});
			} else {
				alert('Les mots de passe ne correspondent pas');
			}

			console.log(this.get('username'));
		}
	}
});
