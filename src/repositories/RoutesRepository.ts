import { Request, Response } from 'express';
import { Location } from '../model/routes'

export const RoutesRepository = {
  show: async (req: Request, res: Response) => {
    const { lat, long } = req.query;

    console.log(`${lat},${long}`)

    const location = await Location.findOne({ coord: `${lat},${long}` });

    return res.json(location);
  }
}
