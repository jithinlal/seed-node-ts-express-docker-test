'use strict';

exports.config = {
	app_name: ['app_name'],
	license_key: 'app_key',
	logging: {
		level: 'info',
	},
	allow_all_headers: true,
	application_logging: {
		forwarding: {
			enabled: true,
		},
	},
	attributes: {
		exclude: [
			'request.headers.cookie',
			'request.headers.authorization',
			'request.headers.proxyAuthorization',
			'request.headers.setCookie*',
			'request.headers.x*',
			'response.headers.cookie',
			'response.headers.authorization',
			'response.headers.proxyAuthorization',
			'response.headers.setCookie*',
			'response.headers.x*',
		],
	},
};
