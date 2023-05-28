import { Request, Response } from 'express';
import { googleMapsApi } from '../../../configs/api/googleMaps';

export async function getPlaceDetails(req: Request, res: Response) {
    const { place_id } = req.query;

  if (!place_id) {
    return res.status(400).json({ error: 'Missing query place_id' });
  }

  const { data: { results: placeDetails } } = await googleMapsApi.get('/place/details/json', {
    params: {
      place_id
    }
  });

  res.json(placeDetails);
}
