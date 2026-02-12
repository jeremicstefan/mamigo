import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL || 'stejer28@gmail.com';

function escapeHtml(str) {
  if (str == null || str === '') return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body || {};

  // Server-side validation
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Ime je obavezno' });
  }
  if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Unesite ispravan email' });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Poruka je obavezna' });
  }

  const safe = {
    name: escapeHtml(name.trim()),
    email: escapeHtml(email.trim()),
    phone: escapeHtml((phone || '').trim()) || 'Nije unet',
    service: escapeHtml((service || '').trim()) || 'Nije izabrano',
    message: escapeHtml(message.trim()),
  };

  try {
    await resend.emails.send({
      from: 'Mamigo Sajt <onboarding@resend.dev>',
      to: [TO_EMAIL],
      replyTo: email.trim(),
      subject: `Nova poruka sa sajta – ${name.trim()}`,
      html: `
        <h2>Nova poruka sa kontakt forme</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;width:140px;">Ime i prezime</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${safe.name}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${safe.email}">${safe.email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Telefon</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${safe.phone}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Usluga</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${safe.service}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Poruka</td>
            <td style="padding:8px 12px;white-space:pre-wrap;">${safe.message}</td>
          </tr>
        </table>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Greška pri slanju poruke. Pokušajte ponovo.' });
  }
}
