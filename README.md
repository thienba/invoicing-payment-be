# invoicing-payment-be

REST API for a small invoicing app: users, invoices, image upload, and sending an invoice by email (SendGrid) or SMS (Twilio). Pairs with [invoicing-payment-ui](https://github.com/thienba/invoicing-payment-ui).

## Stack

Node.js, Express, Sequelize with MySQL (migrations and seeders), Multer for uploads, SendGrid, Twilio.

## Endpoints (`/api/v1`)

| Route | Purpose |
|---|---|
| `/users` | Create and read users (checks the user exists before creating an invoice) |
| `/invoices` | Create and read invoices |
| `/send_mails` | Send the invoice by email (SendGrid) |
| `/send_sms` | Send the invoice by SMS (Twilio) |

## Run

```bash
npm install
# set the database in config/config.json, then:
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
# set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_MESSAGING_SERVICE_SID and SENDGRID_API_KEY in your environment
npm run dev        # http://localhost:4000
```
