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

  it("test email replay", async () => {
    expect.assertions(2)
    try {
      const input = {
        name: 'clientTest',
        email: 'client2@email.com', //already registered
        cpf: '22222222222',
        phone: '(22)99999-9999'
      }

      await formBusiness.registration(input)
    } catch (error) {
      if (error instanceof UnprocessableEntity) {
        expect(error.message).toBe("ERROR: 'email' already registered.")
        expect(error.statusCode).toBe(422)
      }
    }
  })

  it("test cpf replay", async () => {
    expect.assertions(2)
    try {
      const input = {
        name: 'clientTest',
        email: 'clientTest@email.com',
        cpf: '11122233344', //already registered
        phone: '(22)99999-9999'
      }

      await formBusiness.registration(input)
    } catch (error) {
      if (error instanceof UnprocessableEntity) {
        expect(error.message).toBe("ERROR: 'cpf' already registered.")
        expect(error.statusCode).toBe(422)
      }
    }
  })

  it("test cpf length", async () => {
    expect.assertions(2)
    try {
      const input = {
        name: 'clientTest',
        email: 'clientTest@email.com',
        cpf: '222222', //wrong length
        phone: '(22)99999-9999'
      }

      await formBusiness.registration(input)
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.message).toBe("ERROR: 'cpf' must be 11 numbers characters. Exemple: 00011122233")
        expect(error.statusCode).toBe(400)
      }
    }
  })

  it("test cpf only numbers", async () => {
    expect.assertions(2)
    try {
      const input = {
        name: 'clientTest',
        email: 'clientTest@email.com',
        cpf: '222222222aa', //wrong length
        phone: '(22)99999-9999'
      }

      await formBusiness.registration(input)
    } catch (error) {
      if (error instanceof BadRequestError) {
        expect(error.message).toBe("ERROR: 'cpf' must be 11 numbers characters. Exemple: 00011122233")
        expect(error.statusCode).toBe(400)
      }
    }
  })

})