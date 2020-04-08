import React, { useEffect, useState } from 'react';
import ScrollPageContent from './ScrollPageContent';
import { Button, LinearProgress } from '@material-ui/core';

export interface IScrollPageProps {
    children: React.ReactNode;
    progressBar: boolean;
    progressBarLocation?: 'top' | 'bottom';
}


const scrollToPercents = (scrollSize: number, scrollDistance: number, innerHeight: number, topOffset: number): number => {
    scrollSize -= innerHeight;
    scrollDistance -= topOffset;
    scrollDistance = scrollDistance < 0 ? 0 : scrollDistance;

    return Math.round((1 - (scrollSize - scrollDistance) / scrollSize) * 100);
}


const ScrollPage = (props: IScrollPageProps) => {
    const {children, progressBar, progressBarLocation} = props;

    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    const [scrollSize, setScrollSize] = useState(window.innerHeight);
    const [distanceFromTop, setDistanceFromTop] = useState(0);
    const [scrolledPercents, setScrolledPercents] = useState(0);
    const [activePage, setActivePage] = useState(0);


    // mount-unmount handlers
    // window resizing and scrolling events
    useEffect(() => {
        const scrollHandler = (): void => {
            setScrolledPercents(scrollToPercents(scrollSize, window.pageYOffset, innerHeight, distanceFromTop));
        }

        const resizeHandler = (): void => {
            setInnerHeight(window.innerHeight);
        }

        window.addEventListener('resize', resizeHandler);
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [scrollSize, innerHeight, distanceFromTop]);


    // ScrollPage size
    const scrollPageRef = (element: HTMLDivElement) => {
        if (element) {
            setScrollSize(element.scrollHeight);
            setDistanceFromTop(element.offsetTop);
        }
    };

    const setNewPage = (pageNumber: number) => {
        setActivePage(pageNumber);
    }


    // wrap children with pages
    const pageChildren = React.Children.map(children, (child, i) => {


        return <ScrollPageContent
            pageHeight={innerHeight}
            isActive={i === activePage}
        >
            {child}
            <div>
                <Button
                    onClick={() => setNewPage(i + 1)}
                >
                    Next
                </Button>
            </div>
        </ScrollPageContent>
    });


    return (
        <div
            ref={scrollPageRef}
        >
            {
                progressBar ?
                    <div
                        style={{
                            position: 'fixed',
                            bottom: 0,
                            width: '100%'
                        }}
                    >
                        <LinearProgress
                            variant='determinate'
                            value={scrolledPercents}
                        />
                    </div> :
                    null
            }
            {pageChildren}
        </div>
    );
};

export default ScrollPage;
