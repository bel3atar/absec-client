import DS from 'ember-data';

export default DS.Model.extend({
	blind: DS.attr('number'),
	nplayers: DS.attr('number'),
	remaining: DS.attr('number'),
	owner: DS.belongsTo('user', {async: true}),
	players: DS.hasMany('user')
});
