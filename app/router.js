import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('description');
  this.route('authentif');
  this.route('liste_partie');
  this.route('games.new');
  this.route('newgame');
  this.route('partie');
  this.route('waiting');
});
