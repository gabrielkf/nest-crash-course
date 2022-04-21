const SUCCESS_MESSAGE = 'Server is working!';

export class AppConstants {
  public static HealthCheck = {
    Message: SUCCESS_MESSAGE,
    OkDescription: `Returns "${SUCCESS_MESSAGE}" message`,
    InternalServerErrorDescription: 'Server is down',
  };
}
