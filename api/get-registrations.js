// Vercel Serverless Function để lấy danh sách đăng ký
// File này sẽ tạo API endpoint: /api/get-registrations

export default async function handler(req, res) {
  // Chỉ cho phép GET request
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // OPTION 1: Lấy từ Database
    /*
    const { MongoClient } = require('mongodb')
    const client = new MongoClient(process.env.MONGODB_URI)
    await client.connect()
    const db = client.db('scaters')
    const registrations = await db.collection('evening-events')
      .find({})
      .sort({ createdAt: -1 })
      .toArray()
    await client.close()
    
    return res.status(200).json({
      success: true,
      data: registrations
    })
    */

    // OPTION 2: Lấy từ Google Sheets
    /*
    const { google } = require('googleapis')
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
    })
    const sheets = google.sheets({ version: 'v4', auth })
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Registrations!A:Z'
    })
    
    return res.status(200).json({
      success: true,
      data: response.data.values
    })
    */

    // TEMPORARY: Return static XML data
    // Trong production, thay bằng database query
    return res.status(200).json({
      success: true,
      message: 'Please implement database connection',
      data: []
    })

  } catch (error) {
    console.error('Get registrations error:', error)
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    })
  }
}
