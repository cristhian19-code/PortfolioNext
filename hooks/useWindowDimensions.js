import { useEffect, useState } from "react";

export default function useWindowDimensions() {

    const hasWindow = typeof window !== 'undefined';

    const getWindowDimensions = () => {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const isMobile = () => {
        if(hasWindow){
            return window.innerWidth < 991 
        }else{
            return false;
        }
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [mobile, setMobile] = useState(isMobile());

    useEffect(() => {
        if (hasWindow) {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
                setMobile(isMobile())
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    return {windowDimensions,mobile};
}