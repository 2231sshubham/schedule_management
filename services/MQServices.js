const amqp = require('amqplib/callback_api');
const CONN_URL = process.env.CONN_URL

async function publishToQueue(queueName, data){
    try {
        const conn = amqp.connect(CONN_URL)
        const ch = await conn.createChannel();
        ch.sendToQueue(queueName, new Buffer.from(data));

    process.on('exit', (code) => {
        ch.close();
        console.log(`Closing rabbitmq channel`);
    })
        
    } catch (err) {
        console.log(err.toString());
        throw err
    }
};

module.exports = {publishToQueue}