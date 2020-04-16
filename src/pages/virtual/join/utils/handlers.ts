import React from 'react';
import * as H from 'history';

export type FormActionElements = HTMLInputElement | HTMLLinkElement | HTMLButtonElement;

export const dispatchFocusAction = (element: FormActionElements) => {
    const mouseClick = new MouseEvent('click');

    switch (element.nodeName.toLowerCase()) {
        case 'input':
            element.focus();
            break;
        case 'button':
            element.click();
            break;
        default:
            element.dispatchEvent(mouseClick);
    }
};

export const formRefFactory = (refCollection: Array<FormActionElements>) => {
    return (element: FormActionElements) => element && refCollection.push(element);
}

export const keyDownHandlerFactory = (refCollection: Array<FormActionElements>) => {
    return (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            const elementIndex = refCollection.indexOf(event.target as FormActionElements);
            refCollection[elementIndex + 1] && dispatchFocusAction(refCollection[elementIndex + 1]);
        }
    }
}

export const nextPageFactory = (history: H.History<any>) => {
    return (pageURL: string) => history.push(pageURL);
}
