import DS from 'ember-data';

export default DS.Model.extend({
	username: DS.attr('string'),
	password: DS.attr('string'),
	score: DS.attr('number'),
	fbid: DS.attr('string')
});
