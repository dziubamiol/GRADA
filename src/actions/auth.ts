import { Dispatch } from 'redux';
import { IRoot } from '../reducers/root';
import { ThunkAction } from 'redux-thunk';
import FetchProxy from '../API/FetchProxy';

export const VALIDATE_SESSION = 'VALIDATE_SESSION';
export const INVALIDATE_SESSION = 'INVALIDATE_SESSION';

export type TAuthAction = {
    type: string
}

export const validateSession = (): TAuthAction => {
    return {
        type: VALIDATE_SESSION
    }
}

export const invalidateSession = (): TAuthAction => {
    return {
        type: INVALIDATE_SESSION
    }
}

export type ThunkResult<R> = ThunkAction<R, IRoot, undefined, TAuthAction>;

export const checkAuth = (): ThunkResult<Promise<void>> => async (dispatch: Dispatch) => {
    return FetchProxy(`/me`)
        .then((response: Response) => {
            if (response.status === 200) {
                console.log('validate');
                dispatch(validateSession());
            } else {
                dispatch(invalidateSession());
            }
        });
}
