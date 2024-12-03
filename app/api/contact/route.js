import nodemailer from 'nodemailer';

export async function POST(req) {

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response('Please fill in all fields.', { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '',
      pass: '',
    },
  });

  const mailOptions = {
    from: email,
    to: 'mailtrap@techchain.com.br',
    subject: 'New Contact Form Submission',
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Mensagem enviada com sucesso!', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Error sending email. Please try again later.', { status: 500 });
  }
}
