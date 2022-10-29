import { useState, useEffect } from 'react';

interface WindowDimentions {
    width: number;
    height: number;
}

function getWindowDimensions(): WindowDimentions {
    const { innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height
    };
}

export default function useWindowDimensions(callback?): WindowDimentions {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>(getWindowDimensions());

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions(getWindowDimensions());
            if (callback) callback(windowDimensions);
        }

        window.addEventListener('resize', handleResize);

        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
