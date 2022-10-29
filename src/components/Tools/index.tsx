import { useState, useEffect } from 'react';

import { observer } from 'mobx-react';
import gStore from 'src/stores/GlobalStore';

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

export default function useWindowDimensions(): WindowDimentions {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>(getWindowDimensions());

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions(getWindowDimensions());
            gStore.setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);

        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
