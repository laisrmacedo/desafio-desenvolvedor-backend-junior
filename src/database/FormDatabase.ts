import dotenv from 'dotenv'

dotenv.config()

const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database : 'forms_answers'
  }
});

export interface FormDB {
  name: string,
  email: string, 
  cpf: string,
  phone: string
}

export class FormDatabase{
  public static TABLE_FORMS_ANSWERS= 'forms_answers'

  public async findByEmail(email: string): Promise<FormDB | undefined>{
    const result = await knex(FormDatabase.TABLE_FORMS_ANSWERS)
    .select()
    .where({email});

    return result[0]
  }

  public async findByCpf(cpf: string): Promise<FormDB | undefined>{
    const result = await knex(FormDatabase.TABLE_FORMS_ANSWERS)
    .select()
    .where({cpf});

    return result[0]
  }

  public async insert(input: FormDB): Promise<void>{
    await knex(FormDatabase.TABLE_FORMS_ANSWERS) 
    .insert(input);
  }

  public async getByDate(initial: string, final: string): Promise<FormDB[] | undefined>{
    const result = await knex(FormDatabase.TABLE_FORMS_ANSWERS) 
    .select()
    .whereBetween('created_at', [initial, final])

    if(result.length === 0){
      return undefined
    }else{
      return result
    }
  }
}