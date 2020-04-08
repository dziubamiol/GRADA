import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    scrollPageContent: {
        padding: 0,
        margin: 0,
    }
})

export interface IScrollPageContentProps {
    /**
     * Calculated page height, window.innerHeight as usual
     */
    pageHeight: number;
    /**
     * If page is active window should scroll to it
     */
    isActive: boolean;
    children?: React.ReactNode;
}

const ScrollPageContent = (props: IScrollPageContentProps) => {
    const {pageHeight, children, isActive} = props;
    const classes = useStyles();
    const [distanceFromTop, setDistanceFromTop] = useState();

    const rootRef = (element: HTMLDivElement) => element && setDistanceFromTop(element.offsetTop);

    // make page active
    useEffect(() => {
        if (isActive) {
            window.scrollTo({
                top: distanceFromTop,
                behavior: 'smooth'
            });
        }
    }, [pageHeight, distanceFromTop, isActive]);

    return (
        <div
            className={classes.scrollPageContent}
            style={{
                minHeight: pageHeight
            }}
            ref={rootRef}
        >
            {children}
        </div>
    );
};

export default ScrollPageContent;
