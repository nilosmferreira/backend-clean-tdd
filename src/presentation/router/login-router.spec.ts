type HttpRequest = {
  body: {
    password?: string,
    email?: string
  }
}
type HttpResponse = {
  statusCode: number;
}

class LoginRouter {
  route(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.email) {
      return {
        statusCode: 400
      }
    }
  }
}
describe('Rota de login', () => {
  test('deve retornar 400 se o email não for fornecido', () => {
    const sut = new LoginRouter();
    const httpRequest: HttpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})