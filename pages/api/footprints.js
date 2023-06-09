import Footprint from '../../models/footprint'
import connectDB from '../../db'

connectDB();

export default async (req, res) => {
  const allowedOrigins = ['http://localhost:3000', 'https://carbon-footprint-calc.vercel.app']
  // const origin = req.headers.origin
  const origin = 'https://carbon-footprint-calc.vercel.app'
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  try {
    const footprint = await Footprint.find({zipCode: req.query.zip})
    if (footprint.length > 0) {
      res.json(footprint)
    } else {
      res.status(404).json({error: 'zip code not found'})
    }
  } catch (error) {
    console.error('Error retrieving data', error);
    res.status(500).json({ error: 'Error retrieving data' });
  }
};