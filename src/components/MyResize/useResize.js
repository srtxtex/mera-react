import {useEffect, useState} from "react";

let ratio = 2;

const getWindowSize = () => {
    return {
        windowWidth: `${window.innerWidth}px`,
        windowHeight: `${window.innerHeight}px`,
        divWidth: `${Math.round(window.innerWidth / ratio)}px`,
        divHeight: `${Math.round(window.innerHeight / ratio)}px`
    }
};

function useResize(n) {
    ratio = n;
    const [size, setSize] = useState(getWindowSize());

    useEffect(() => {
        function handlerResize() {
            setSize(getWindowSize());
        }
        window.addEventListener('resize', handlerResize);
        return () => window.removeEventListener('resize', handlerResize);
    }, []);
    return size;
}

export default useResize;