import { FormBusiness } from '../../src/business/FormBusiness'
import { BadRequestError } from '../../src/errors/BadRequestError'
import { UnprocessableEntity } from '../../src/errors/UnprocessableEntityError'
import { FormDatabaseMock } from '../mocks/FormDatabaseMock'

describe("registration", () => {
  const formBusiness = new FormBusiness(
    new FormDatabaseMock()
  )

  it("test registration", async () => {
    const input = {
      name: 'clientTest',
      email: 'clientTest@email.com',
      cpf: '22222222222',
      phone: '(22)99999-9999'
    }

    await formBusiness.registration(input)
  })

  it("test email format", async () => {
    expect.assertions(2)
    try {
      const input = {
        name: 'clientTest',
        email: 'incorrectFormat',
        cpf: '22222222222',
        phone: '(22)99999-9999'
      }

      await formBusiness.registration(input)
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.message).toBe("ERROR: 'email' must be like 'example@example.example'.")
        expect(error.statusCode).toBe(400)
      }
    }
  })
})