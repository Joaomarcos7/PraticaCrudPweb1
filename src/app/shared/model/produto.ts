export class Produto{

  constructor(private _id: number, private _nome: string,
              private _categoria: string) {
  }

  get  id(): number{
    return this._id;
  }

  set id(value: number) {
    this._id= value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get categoria(): string {
    return this._categoria;
  }

  set categoria(value: string) {
    this._categoria = value;
  }
}
