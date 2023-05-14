interface Service {
  name: string,
  price: number
}

interface Address {
  cep: string,
  neighborhood: string,
  city: string,
  number: string,
  state: string,
}

interface Responsible {
  name: string,
  occupation: string,
  cpf: string,
  email: string,
}

export interface ClinicParams {
  cnpj: string,
  brandName: string,
  legalName: string,
  address: Address,
  responsible: Responsible,
  services: Service,
  userId: string,
}