const express = require( 'express' );
const swaggerJsdoc = require('swagger-jsdoc');
const router = require( './src/router' );

const app = express();

app.use( '/api', router );

const swaggerJsdocOptions = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Test API',
			version: '1.0.0',
		},
	},
	apis: [ './src/*.js' ],
	failOnErrors: true,
};
const swaggerSpec = swaggerJsdoc( swaggerJsdocOptions );
console.log( 'swaggerSpec:', JSON.stringify( swaggerSpec ) );

app.listen( 3000, () => {
	console.log( 'Server is listening on port 3000' );
} );
