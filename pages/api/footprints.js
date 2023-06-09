import Footprint from '../../models/footprint'
import connectDB from '../../db'

connectDB();

export default async (req, res) => {
  try {
    const footprint = await Footprint.find({zipCode: req.query.zip})
    if (footprint.length > 0) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.json(footprint)
    } else {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(404).json({error: 'zip code not found'})
    }
    // const data = await Footprint.find()
    // res.json(data[0])
  } catch (error) {
    console.error('Error retrieving data', error);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000', 'https://carbon-footprint-calc.vercel.app');
    res.status(500).json({ error: 'Error retrieving data' });
  }
};