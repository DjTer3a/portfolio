require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, FROM_EMAIL, TO_EMAIL, MAILING_LIST } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { name, email } = req.body;
  const msg = {
    to: email, // Change to your recipient
    from: FROM_EMAIL, // Change to your verified sender
    bcc: TO_EMAIL,
    subject: "Mostafa's Newsletter",
    html: `<p><strong>Hey </strong>${name}</p>
    <p><strong>Your email with address: </strong>${email} was recently used to subscribe to this mailing list.</p>    
    <p>You are now subscribed. If you didn't take this action yourself feel free to unsubscribe anytime.</p>`,
  };
  await sgMail.send(msg);
  console.log("email sent");
  res.status(200).json({ success: true });
}