import { EmailValueObject } from './email.value-object';
describe('email-value-object.ts', () => {
  it('should return a valid email', () => {
    const email = EmailValueObject.create('valid_mail@domain.com');

    expect(email.isSuccess).toBe(true);
    expect(email.getResult().value).toBe('valid_mail@domain.com');
  });

  it('should return fail if provide an invalid email', () => {
    const email = EmailValueObject.create('invalid_email');
   
    expect(email.isFailure).toBe(true);
    expect(email.error).toBe('Invalid Email');
  });


    it('should return a lowercase email string', () =>{

      const email = EmailValueObject.create('VALID_MAIL@DOMAIN.COM');

      expect(email.getResult().value).toBe('valid_mail@domain.com');
    });
});
