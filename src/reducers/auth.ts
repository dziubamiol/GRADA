import { TAuthAction, INVALIDATE_SESSION, VALIDATE_SESSION } from '../actions/auth';

export type IAuth = boolean;

const initState: IAuth = true;

const auth = (state: IAuth = initState, action: TAuthAction): IAuth => {
    switch (action.type) {
        case VALIDATE_SESSION:
            return true;
        case INVALIDATE_SESSION:
            return false;
        default:
            return state;
    }
}

export default auth;
