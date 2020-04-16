import { InvalidateSession } from './Session';

const FetchProxy = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
    if (typeof input === 'string') {
        input = process.env.REACT_APP_DOMAIN + input;
    }

    const response = await fetch(input);

    if (response.status === 401 || response.status === 407) {
        InvalidateSession();

        //document.location.pathname = '/join';
    }

    return response;
};

export default FetchProxy;
