import Validator, { IValidatorConfig } from '../Validator';

describe('Form validator check', () => {
    describe('Email validation check', () => {
        it('Valid email, required, included', () => {
            const validator = new Validator({
                type: 'email',
                required: true,
                name: 'email',
            });

            const emailToValidate = new Map([['email', 'email@gmail.com']]);

            const validatorMessage = validator.validate(emailToValidate);
            expect(validatorMessage.size).toBe(0);
        });

        it('Valid email, required but not included', () => {
            const validator = new Validator({
                type: 'email',
                required: true,
                name: 'email',
            });

            const emailToValidate = new Map([['another', 'another']]);

            const validatorMessage = validator.validate(emailToValidate);
            expect(validatorMessage.size).toBe(1);
            expect(validatorMessage.get('email')).toMatch(/not specified/);
        });

        it('Invalid email, required, included', () => {
            const validator = new Validator({
                type: 'email',
                required: true,
                name: 'email',
            });

            const emailToValidate = new Map([['email', 'email@@gmail.com']]);

            const validatorMessage = validator.validate(emailToValidate);

            expect(validatorMessage.size).toBe(1);
            expect(validatorMessage.get('email')).toMatch(/Incorrect email/);
        });

        it('Correct email, not required, not included', () => {
            const validator = new Validator({
                type: 'email',
                required: false,
                name: 'email',
            });

            const emailToValidate = new Map([['another', 'email@@gmail.com']]);

            const validatorMessage = validator.validate(emailToValidate);

            expect(validatorMessage.size).toBe(0);
        });
    });

    describe('Password validation check', () => {
        it('Correct password', () => {
            const validator = new Validator({
                type: 'password',
                required: true,
                name: 'password',
            });

            const passwordToValidate = new Map([['password', '123F456789Av']]);

            const validatorMessage = validator.validate(passwordToValidate);
            expect(validatorMessage.size).toBe(0);
        });
        it('Incorrect password', () => {
            const validator = new Validator({
                type: 'password',
                required: true,
                name: 'password',
            });

            const passwordToValidate = new Map([['password', '1239234v234']]);

            const validatorMessage = validator.validate(passwordToValidate);
            expect(validatorMessage.size).toBe(1);
            expect(validatorMessage.get('password')).toMatch(/Incorrect password format/);
        });
    });

    describe('Email and password simultaneously check', () => {
        it('Correct password and email', () => {
            const fields: Array<IValidatorConfig> = [
                {
                    type: 'password',
                    required: true,
                    name: 'password'
                },
                {
                    type: 'email',
                    required: true,
                    name: 'email'
                }
            ];
            const validator = new Validator(fields);

            const fieldsToValidate = new Map([['password', '1239234v2A34'], ['email', 'email@gmail.com']]);

            const validatorMessage = validator.validate(fieldsToValidate);
            expect(validatorMessage.size).toBe(0);
        });

        it('Incorrect password and correct email', () => {
            const fields: Array<IValidatorConfig> = [
                {
                    type: 'password',
                    required: true,
                    name: 'password'
                },
                {
                    type: 'email',
                    required: true,
                    name: 'email'
                }
            ];
            const validator = new Validator(fields);

            const fieldsToValidate = new Map([['password', '12392f34v234'], ['email', 'email@gmail.com']]);

            const validatorMessage = validator.validate(fieldsToValidate);
            expect(validatorMessage.size).toBe(1);
            expect(validatorMessage.get('password')).toMatch(/Incorrect password format/);
        });

        it('Incorrect password and empty required email', () => {
            const fields: Array<IValidatorConfig> = [
                {
                    type: 'password',
                    required: true,
                    name: 'password'
                },
                {
                    type: 'email',
                    required: true,
                    name: 'email'
                }
            ];
            const validator = new Validator(fields);

            const fieldsToValidate = new Map([['password', '12392f34v234']]);

            const validatorMessage = validator.validate(fieldsToValidate);
            expect(validatorMessage.size).toBe(2);
            expect(validatorMessage.get('password')).toMatch(/Incorrect password format/);
            expect(validatorMessage.get('email')).toMatch(/not specified/);
        });
    });
});
