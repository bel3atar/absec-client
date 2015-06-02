import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
		this.$().foundation({
				slider: {
					on_change: () => {
						this.set('value', Ember.$('[data-slider]').attr('data-slider'));
					}
				}
		});
	}
});
