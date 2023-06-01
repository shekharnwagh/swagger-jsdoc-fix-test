const { Router } = require( 'express' );

const router = Router();

/**
 * @openapi
 * /status:
 *   get:
 *     description: Get the API status
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ok
 */
router.get( '/status', (req, res) => {
	res.status( 200 ).json( { message: 'ok' } );
} );

module.exports = router;
