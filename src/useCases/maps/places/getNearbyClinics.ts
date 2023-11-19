import { Request, Response } from 'express';
import { googleMapsApi } from '../../../configs/api/googleMaps';

export async function getNearbyClinics(req: Request, res: Response) {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: 'Missing query lat and lng' });
  }

  const clientLocation = `${lat}, ${lng}`

  const { data: { results: rawPlaces } } = await googleMapsApi.get('/place/nearbysearch/json', {
    params: {
      location: clientLocation,
      type: 'veterinary_care|pet_store',
      radius: 5000,
      opennow: '1'
    }
  });

  async function distanceMatrix(destination: string, origin: string) {
    const { data: distance } = await googleMapsApi.get('/distancematrix/json', {
      params: {
        origins: origin,
        destinations: destination
      }
    })

    return {
      distanceLength: distance.rows[0].elements[0].distance.text
    }
  }

  const places = await Promise.all(rawPlaces.map(async (place: any) => {
    const placeLocation = `${place.geometry.location.lat}, ${place.geometry.location.lng}`;
    const { distanceLength } = await distanceMatrix(placeLocation, clientLocation);

    return {
      id: place.place_id,
      name: place.name,
      images: place.photos,
      rating: place.rating,
      location: placeLocation,
      distanceLength,
      isOpen: place?.opening_hours?.open_now
    }
  }))

  res.json(places)
}
