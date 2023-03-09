import { FormBusiness } from "../../src/business/FormBusiness"
import { FormDatabaseMock } from "../mocks/FormDatabaseMock"

describe("getFormsBetweenDates", () => {
  const formBusiness = new FormBusiness(
    new FormDatabaseMock()
  )

  it("test getFormsBetweenDates for dates existing in DB", async () => {
    const input = {
      initial: '2023-01-01',
      final: '2023-01-10'
    }

    const output = await formBusiness.getFormsBetweenDates(input)
    expect(output).toEqual([{
      id: 1,
      name: 'client1',
      email: 'client1@email.com',
      cpf: '00011122233',
      phone: '(00)99999-9999',
      created_at: '2023-01-01'
    }])
  })

  it("test getFormsBetweenDates for dates not existing in the DB", async () => {
    const input = {
      initial: '2023-04-01',
      final: '2023-05-01'
    }

    const output = await formBusiness.getFormsBetweenDates(input)
    expect(output).toBe('There is no registration in the requested date range.')
  })
})