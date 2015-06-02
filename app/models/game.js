import DS from 'ember-data';

export default DS.Model.extend({
	blind: DS.attr('number'),
	nplayers: DS.attr('number'),
	owner: DS.belongsTo('user'),
	players: DS.hasMany('user')
});
