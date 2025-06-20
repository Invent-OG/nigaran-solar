import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function sendLeadThankYouEmail(email: string, name: string) {
  try {
    await resend.emails.send({
      from: "Nigaran Solar <no-reply@nigaran.in>",
      to: email,
      subject: "Thank You for Your Interest in Solar Energy",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #166534;">Thank you, ${name}!</h1>
          <p>We've received your inquiry about solar energy solutions. Our team will review your requirements and get back to you shortly.</p>
          <p>In the meantime, you can learn more about our services on our website.</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
            <p style="margin: 0;">Best regards,<br>The Nigaran Solar Team</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send lead thank you email:", error);
    throw error;
  }
}

export async function sendJobApplicationConfirmation(
  email: string,
  name: string,
  position: string
) {
  try {
    await resend.emails.send({
      from: "Nigaran Solar Careers <no-reply@nigaran.in>",
      to: email,
      subject: "Application Received - Nigaran Solar",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #166534;">Thank you for applying, ${name}!</h1>
          <p>We've received your application for the <strong>${position}</strong> position at Nigaran Solar.</p>
          <p>Our hiring team will review your application and contact you if your qualifications match our requirements.</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
            <p style="margin: 0;">Best regards,<br>Nigaran Solar HR Team</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send job application confirmation:", error);
    throw error;
  }
}

export async function sendSolarProLeadEmails(
  userEmail: string,
  adminEmail: string,
  formData: {
    firstName: string;
    lastName: string;
    phone: string;
    location: string;
    profession: string;
    whyJoin: string;
  }
) {
  const { firstName, lastName, phone, location, profession, whyJoin } =
    formData;
  const fullName = `${firstName} ${lastName}`;

  try {
    // Admin Notification Email
    await resend.emails.send({
      from: "Nigaran Solar <no-replay@nigaran.in>",
      to: adminEmail,
      subject: "New Solar Pro Application Received",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #166534;">New Solar Pro Application</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Profession:</strong> ${profession}</p>
          <p><strong>Why Join:</strong> ${whyJoin}</p>
          <hr />
          <p style="font-size: 12px;">Sent from Nigaran Solar's Pro Network Form</p>
        </div>
      `,
    });

    // User Confirmation Email
    await resend.emails.send({
      from: "Nigaran Solar <no-reply@nigaran.in>",
      to: userEmail,
      subject: "Thank You for Your Interest in the Solar Pro Network",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #166534;">Thank you, ${firstName}!</h1>
          <p>We've received your application to join the Solar Pro Network at Nigaran Solar.</p>
          <p>Our team will review your submission and get back to you shortly if there's a fit for collaboration.</p>
          <p>In the meantime, you can learn more about us on our website.</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
            <p style="margin: 0;">Best regards,<br>The Nigaran Solar Team</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send Solar Pro lead emails:", error);
    throw error;
  }
}
