import { FunctionComponent } from 'react';

export default interface Route {
    path: string | string[];
    component: FunctionComponent<any>;
    redirectPath?: string;
    routes?: Array<Route>;
}
