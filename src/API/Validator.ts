export interface IValidatorConfig {
    name: string;
    type: 'password' | 'email' | 'any';
    required: boolean;
}


export interface IValidatorHandler {
    (data: string): string;
}

/**
 *
 * @param inputText {string} String to validate
 * @return {string} String with error message, if no message string is empty
 */
export const passwordValidator = (inputText: string): string => {
    const passwordRegEx = /^(?=.+[a-z])(?=.+[A-Z])(?=.*[-+_!@#$%^&*.,?]*)(?=.+[0-9]).{8,16}$/;
    if (passwordRegEx.test(inputText)) {
        return '';
    } else {
        return 'Incorrect password format';
    }
};

/**
 *
 * @param inputText {string} String to validate
 * @return {string} String with error message, if no message string is empty
 */
export const emailValidator = (inputText: string): string => {
    const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (emailRegEx.test(inputText)) {
        return '';
    } else {
        return 'Incorrect email'
    }
};

/**
 *
 * @description Just any validator
 * @return {string} String with error message, if no message string is empty
 */
export const anyValidator = (): string => {
    return '';
};

export const validatorHandlers: Map<string, IValidatorHandler> = new Map([
    ['password', passwordValidator],
    ['email', emailValidator],
    ['any', anyValidator]
]);


export default class Validator {
    fields: Array<IValidatorConfig>;

    /**
     *
     * @param fields {IValidatorConfig, Array<IValidatorConfig>} Setup validators
     * @return Class instance
     */
    constructor (fields: IValidatorConfig | Array<IValidatorConfig>) {
        this.fields = fields instanceof Array ? fields : [fields];

        // check if all fields types are supported
        for (const field of this.fields) {
            if (!validatorHandlers.has(field.type)) {
                throw new Error(`Unsupported field type: '${field.type}' not supported`);
            }
        }
    }

    /**
     * @return {Map<string, string>} Map of errors and their messages
     */
    validate (textFields: Map<string, string>): Map<string, string> {
        const fieldsErrors = new Map();

        for (const field of this.fields) {
            if (textFields.has(field.name)) {
                const validator = validatorHandlers.get(field.type);

                // @ts-ignore, availability checked inside constructor
                const validatorMessage = validator(textFields.get(field.type));
                if (validatorMessage !== '') {
                    fieldsErrors.set(field.name, validatorMessage);
                }
            } else {
                if (field.required) {
                    fieldsErrors.set(field.name, 'Required field not specified');
                }
            }
        }

        return fieldsErrors;
    }
}
