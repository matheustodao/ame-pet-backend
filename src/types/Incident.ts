type CategoryAnimal = 'doméstico' | 'gado' | 'silvestre' | 'selvagens';
type AnimalSize = 'mini' | 'small' | 'medio' | 'grande' | 'gigante';
export type IncidentStatus = 'ongoing' | 'canceled' | 'done';

export interface IncidentParams {
  category_animal: CategoryAnimal,

  animal_size: AnimalSize,

  animal_lost: Boolean,

  adopt: Boolean,

  user: string,

  ong: string,

  longitude_latitude: string,

  status: IncidentStatus
}

export interface IncidentParamsApi extends Omit<IncidentParams, 'animal_lost' | 'adopt' | 'user' | 'ong'>{
  animal_lost: '1' | '0',

  adopt: '1' | '0',

  ongId: string,
  userId: string,
}
