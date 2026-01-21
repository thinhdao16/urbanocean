// Vercel Serverless Function để lưu đăng ký
// File này sẽ tạo API endpoint: /api/register-evening-event

export default async function handler(req, res) {
  // Chỉ cho phép POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const registrationData = req.body

    // Validate dữ liệu
    if (!registrationData.eventDate || !registrationData.eventLocation || !registrationData.mainEntrant) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // OPTION 1: Lưu vào Database (Recommended)
    // Uncomment và config database của bạn
    /*
    const { MongoClient } = require('mongodb')
    const client = new MongoClient(process.env.MONGODB_URI)
    await client.connect()
    const db = client.db('scaters')
    const result = await db.collection('evening-events').insertOne({
      ...registrationData,
      createdAt: new Date(),
      status: 'pending'
    })
    await client.close()
    */

    // OPTION 2: Gửi email notification
    // Uncomment và config email service
    /*
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'admin@scaters.uk',
      subject: 'New Evening Event Registration',
      html: `
        <h2>New Registration</h2>
        <p><strong>Name:</strong> ${registrationData.mainEntrant.name}</p>
        <p><strong>Event:</strong> ${registrationData.eventLocation} - ${registrationData.eventDate}</p>
        <p><strong>Email:</strong> ${registrationData.mainEntrant.email}</p>
      `
    })
    */

    // OPTION 3: Lưu vào Google Sheets (Simple solution)
    // Uncomment và config Google Sheets API
    /*
    const { google } = require('googleapis')
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })
    const sheets = google.sheets({ version: 'v4', auth })
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Registrations!A:Z',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[
          new Date().toISOString(),
          registrationData.eventDate,
          registrationData.eventLocation,
          registrationData.mainEntrant.name,
          registrationData.mainEntrant.email,
          // ... thêm các fields khác
        ]]
      }
    })
    */

    // TEMPORARY: Log to console (for development)
    console.log('New registration:', registrationData)

    // Trả về success response
    return res.status(200).json({
      success: true,
      message: 'Registration received successfully',
      data: {
        id: Date.now().toString(), // Temporary ID
        ...registrationData
      }
    })

  } catch (error) {
    console.error('Registration error:', error)
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    })
  }
}
