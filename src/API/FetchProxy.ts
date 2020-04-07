import { InvalidateSession } from './Session';

const FetchProxy = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
    const response = await fetch(input, init);

    if (response.status === 401 || response.status === 407) {
        InvalidateSession();

        document.location.pathname = '/join';
    }

    return response;
};

export default FetchProxy;
