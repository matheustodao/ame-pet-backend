export class MissingParams extends Error {
  constructor(...params: string[]) {
    super();
    this.name = 'Missing Params - status_code=400'
    this.message = `Missing one or more Params: ${params.join(', ')}`
  }

  api() {
    return { error: this.message }
  }
}