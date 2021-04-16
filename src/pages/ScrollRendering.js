import React, {useCallback, useEffect, useRef, useState} from 'react';

const ScrollRendering = (props) => {
    let bottomBoundaryRef = useRef(null);
    const [visible, setVisible] = useState(false)
    const visibleComponent = props.children
    const
        scrollObserver = useCallback(
            node => {
                new IntersectionObserver(entries => {
                    entries.forEach(en => {
                        if (en.intersectionRatio > 0) {
                            setVisible(true)
                        }
                    });
                }).observe(node);
            }, [])

    useEffect(() => {
        if (bottomBoundaryRef.current) {
            scrollObserver(bottomBoundaryRef.current);
        }
    }, [bottomBoundaryRef, scrollObserver]);

    return (
        <>
            {visible && (
                <div style={{
                    marginBottom:"1rem"
                }}>
                    {visibleComponent}
                </div>
            )}
            <div ref={bottomBoundaryRef}>

            </div>
        </>)
}
export default ScrollRendering
