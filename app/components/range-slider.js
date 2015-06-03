import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
		this.$().foundation({
				slider: {
					on_change: () => {
						this.set(
							'value', 
							Ember.$(`#${this.get('id')}[data-slider]`).attr('data-slider')
						);
					}
				}
		});
	}
});
