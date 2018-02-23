const coins = require("../controllers/coin");
const handler = require("../utils/ControllerHandler");
const express = require("express");
const router = express.Router();

// THIS IS A MODEL, YOU CAN REFERENCE THIS AS IN LINE: 54 or 86

/**
 * @swagger
 * /coins/transfer:
 *   post:
 *     description: make a secure transfer
 *     tags:
 *      - Coin
 *     produces:
 *      - application/json
 *     security: []
 *     parameters:
 *       - name: body
 *         in:  body
 *         schema:
 *           type: object
 *           properties:
 *             sender:
 *               description: Sender Account Hex Key.
 *               type: string
 *             receiver:
 *               description: Receiver Account Hex Key.
 *               type: string
 *             amount:
 *               description: amount of Mota coins transfer
 *               type: number
 *     responses:
 *       200:
 *         description: transfer information
 *         schema:
 *            type: object
 *            properties:
 *              newBalance:
 *                type: number
 *              sender:
 *                type: string
 *              receiver:
 *                type: string
 *              amount:
 *                type: number
 *			 401:
 *         description: not valid transfer
 */
router.post(
  "/transfer",
  handler(coins.transfer, (req, res, next) => [req.body])
);

/**
 * @swagger
 * /coins/balanceOf/{account}:
 *   get:
 *     description: get the current balance of a certain account
 *     tags:
 *      - Coin
 *     produces:
 *      - application/json
 *     security: []
 *     parameters:
 *       - name: account
 *         description: the account hex to find!
 *         in:  path
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: coins information and authorization token
 *         schema:
 *            type: object
 *            properties:
 *              balance:
 *                type: number
 *			 404:
 *         description: the account doesnt exist
 */
router.get(
  "/balanceOf/:account",
  handler(coins.balanceOf, (req, res, next) => [req.body])
);

/**
 * @swagger
 * /coins/mining:
 *   post:
 *     description: mining try
 *     tags:
 *      - Coin
 *     produces:
 *      - application/json
 *     security: []
 *     parameters:
 *       - name: body
 *         in:  body
 *         schema:
 *           type: object
 *           properties:
 *             numberOfShakes:
 *               description: the number of shake for try mining!
 *               type: string
 *             receiver:
 *               description: the receiver of new balance if mining is success
 *               type: string
 *     responses:
 *       200:
 *         description: coins information and authorization token
 *         schema:
 *            type: object
 *            properties:
 *              newBalance:
 *                type: number
 */
router.post("/mining", handler(coins.mining, (req, res, next) => [req.body]));

module.exports = router;
