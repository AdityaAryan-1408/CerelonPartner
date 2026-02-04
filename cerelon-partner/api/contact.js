import { google } from 'googleapis';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, company, email, requirement, message } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toISOString(), 
            name,
            company,
            email,
            requirement,
            message
          ],
        ],
      },
    });

    await resend.emails.send({
      from: 'Cerelon Leads <contact@cerelonpartner.com>',
      to: 'contact@cerelonpartner.com', 
      subject: `New Lead: ${name} (${company})`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #059669;">New Website Inquiry</h2>
          <p>You have received a new lead from the <strong>${requirement}</strong> sector.</p>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong><br/>${message}</p>
          </div>
          
          <p style="font-size: 12px; color: #64748b; margin-top: 20px;">
            This lead has also been saved to your Google Sheet database.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Lead secured & notified.' });

  } catch (error) {
    console.error('Backend Error:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}