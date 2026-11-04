const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSMS = (req, res) => {
    const { message, toNumber } = req.body;
    client.messages
        .create({
            body: message,
            messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
            to: `+84${parseInt(toNumber)}`
        })
        .then(message => res.status(200).send(message))
        .catch(err => res.status(500).send(err))
        .done();
}

module.exports = {
    sendSMS
}