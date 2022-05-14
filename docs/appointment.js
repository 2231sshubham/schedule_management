//appointment docs

/**
 * @swagger
 * /appointment/add:
 *    post:
 *      tags:
 *        - Appointment
 *      summary: Create appointment.
 *      description: Create appointment.
 *      requestBody:
 *          description: Request Body
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          users:
 *                              type: array
 *                          fromDate:
 *                              type: string
 *                          fromTime:
 *                              type: string
 *                          toDate:
 *                              type: string
 *                          toTime:
 *                              type: string
 *                          roomNo:
 *                              type: number                
 *                      example:
 *                          users: ['max', 'paul', 'denise']
 *                          fromDate: "14 May 2022"
 *                          fromTime: "13:00"
 *                          toDate: "14 May 2022"
 *                          toTime: "14:00"
 *                          roomNo: 5
 *
 *                         
 *      responses:
 *        200:
 *          description: Appointment created.
 *        404:
 *          description: Slot not available.
 *        500:
 *          description: Internal Server error / Validation error.
 */