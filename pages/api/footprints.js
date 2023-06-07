import Footprint from '../../models/footprint'
import connectDB from '../../db'

connectDB();

export default async (req, res) => {
  try {
    const data = await Footprint.find()
    res.json(data[0])
  } catch (error) {
    console.error('Error retrieving data', error);
    res.status(500).json({ error: 'Error retrieving data' });
  }
};