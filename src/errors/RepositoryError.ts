export class RepositoryError extends Error {
  constructor(errorLocal: string, err: unknown) {
    super(),
    this.name = 'Repository Error';
    this.message = `Something wrong in ${errorLocal}: ${err}`;
  }
}