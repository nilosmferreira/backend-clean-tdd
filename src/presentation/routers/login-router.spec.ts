interface HttpRequest {
  body: { password: string };
}
interface HttpResponse {
  statusCode: number;
  body: any;
}
class LoginRouter {
  route(httpRequest: HttpRequest): HttpResponse {
    return undefined;
  }
}
describe('Login Router', () => {
  test('should return 400 if no email is  provided', () => {
    const sut = new LoginRouter();
    const httpRequest: HttpRequest = {
      body: {
        password: 'any_password',
      },
    };
    const httpResponse = sut.route(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
