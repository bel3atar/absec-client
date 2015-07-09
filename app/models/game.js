import DS from 'ember-data';

export default DS.Model.extend({
	blind: DS.attr('number'),
	nplayers: DS.attr('number'),
	remaining: Ember.computed('nplayers', 'players.[]', function () {
		return this.get('nplayers') - this.get('players.length');
	}),
	owner: DS.belongsTo('user', {async: true}),
	players: DS.hasMany('user', {async: true})
});
