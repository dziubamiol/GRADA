export const InvalidateSession = (): void => {
    // put code to invalidate session
    document.cookie = "session=null";
    document.cookie = "csrf=null";
};

export const ValidateSession = (): boolean => {
    const sessionParser = /session=[\w\W]+/;
    const csrfParser = /csrf=[\w\W]+/;

    const session = sessionParser.exec(document.cookie);
    const csrf = csrfParser.exec(document.cookie);

    if (session === null || csrf === null) {
        InvalidateSession();
        return false;
    } else {
        if (session[0].indexOf('null') !== -1 || csrf[0].indexOf('null') !== -1) {
            InvalidateSession();
            return false;
        }
    }
    return true;
};
