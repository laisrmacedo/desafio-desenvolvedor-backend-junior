export interface FormDB {
  name: string,
  email: string,
  cpf: string,
  phone: string
}

export interface FormDBMock {
  id: number,
  name: string,
  email: string,
  cpf: string,
  phone: string,
  created_at: string
}

const DBMock: FormDBMock[] = [
  {
    id: 1,
    name: 'client1',
    email: 'client1@email.com',
    cpf: '00011122233',
    phone: '(00)99999-9999',
    created_at: '2023-01-01'
  },
  {
    id: 2,
    name: 'client2',
    email: 'client2@email.com',
    cpf: '11122233344',
    phone: '(11)99999-9999',
    created_at: '2023-03-01'
  }
]

export class FormDatabaseMock {
  public static TABLE_FORMS_ANSWERS = 'forms_answers'

  public async findByEmail(email: string): Promise<FormDBMock | undefined> {
    let result:FormDBMock | undefined = undefined
    for (const client of DBMock) {
      if(client.email === email){
        result = client
      }
    }

    return result
  }

  public async findByCpf(cpf: string): Promise<FormDBMock | undefined> {
    let result:FormDBMock | undefined = undefined
    for (const client of DBMock) {
      if(client.cpf === cpf){
        result = client
      }
    }

    return result
  }

  public async insert(input: FormDB): Promise<void> { }

  public async getByDate(initial: string, final: string): Promise<FormDBMock[] | undefined> {
    const initialDate = new Date(initial).getTime()
    const finalDate = new Date(final).getTime()

    let result:FormDBMock[] | undefined = []

    for (const client of DBMock) {
      const createdAt = new Date(client.created_at).getTime()
      if(createdAt >= initialDate && createdAt <= finalDate){
        result.push(client)
      }
    }

    return result.length === 0 ? undefined : result
  }
}