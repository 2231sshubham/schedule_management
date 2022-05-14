/**
 * @swagger
 * /user_appointment/appointments:
 *    get:
 *      tags:
 *        - User_appointments
 *      summary: Get all appointments of a user.
 *      description: Get all appointments of a user.
 *      parameters:
 *          - in: query
 *            name: user_name
 *            schema:
 *              type: string
 *            required: true
 *      responses:
 *        200:
 *          description: Got all appointments of a user.
 *        429:
 *          description: Too Many Requests.
 *        500:
 *          description: Internal server error / Validation error.
 */