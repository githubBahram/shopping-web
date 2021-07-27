import React, {useCallback, useEffect, useRef, useState} from 'react'

// lazy load images with intersection observer
const ImageLazyLoading = ({src}) => {
    const imgObserver = useCallback(node => {
        const intObs = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (en.intersectionRatio > 0) {

                    const currentImg = en.target;
                    const newImgSrc = currentImg.dataset.src;
                    // only swap out the image source if the new url exists
                    if (!newImgSrc) {

                        console.error('Image source is invalid');
                    } else {
                        currentImg.src = newImgSrc;
                    }
                    intObs.unobserve(node); // detach the observer when done
                }
            });
        })
        intObs.observe(node);
    }, []);
    const imagesRef = useRef(null);

    const imageLoading = () => {
        console.log("image loaded")
        setImageLoaded(true)

    }

    const [imageLoaded, setImageLoaded] = useState(false)
    useEffect(() => {

        if (imagesRef.current) {

            imgObserver(imagesRef.current)
        }
    }, [imgObserver, imagesRef,imageLoaded])
    return (
        <>

            <img
                style={{width: "100%"}}
                ref={imagesRef}
                data-src={src}
                onLoad={imageLoading}

            />

        </>
    )
}
export default ImageLazyLoading
