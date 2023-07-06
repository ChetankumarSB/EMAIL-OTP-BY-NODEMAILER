# Email OTP with Nodemailer

This is a Node.js application that demonstrates how to send an OTP (One-Time Password) via email using the Nodemailer library. The application generates a random OTP and sends it to a specified email address.

## Features

- Generates a random OTP (One-Time Password)
- Sends the OTP to a specified email address using Nodemailer
- Customizable email template with dynamic OTP insertion
- Uses Gmail SMTP for sending emails (can be easily configured for other email providers)

## Technologies Used

- Node.js
- Nodemailer

## Getting Started

To run this application locally and send an OTP via email, follow these steps:

1. Clone the repository:
- `git clone https://github.com/your-username/email-otp-nodemailer.git`


2. Install the dependencies:
- `cd email-otp-nodemailer`
- `npm install`


4. Configure the email settings:
- Open `index.js` in your favorite text editor.
- Replace `'your-email@gmail.com'` and `'your-password'` with your Gmail email address and password in the `mailConfig` object.
- Update `'recipient@example.com'` with the recipient's email address in the `mailDetails` object.

4. Run the application:
`node index.js`


5. Check the console for the OTP and the email sent confirmation.

## Customize the Email Template

You can customize the email template by modifying the HTML content in the `mailDetails` object in `index.js`. Feel free to update the email subject, content, and styling to match your requirements.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Nodemailer](https://nodemailer.com/) - For the email sending functionality
- [Node.js](https://nodejs.org/) - For the JavaScript runtime environment

---

For sending an OTP via email, use the following command:
`node index.js`


Ensure that you have configured the email settings correctly in the `index.js` file before running the command. The OTP will be generated and sent to the specified recipient email address.


