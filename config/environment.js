/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
		'simple-auth': {
			authenticationRoute: 'index',
			routeAfterAuthentication: 'liste_partie'
		},
		'simple-auth-token': {
			serverTokenEndpoint: 'http://localhost:3000/api/login'
		},
		torii: {
			providers: {
				'facebook-connect':{
					appId: '921476387894055'
				},
				'facebook-oauth2':{
					apiKey: '921476387894055'
				}
			}
		},
    modulePrefix: 'client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }
	return ENV;
};
