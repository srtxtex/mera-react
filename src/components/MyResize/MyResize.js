import React, { useState, useEffect } from 'react';
import './index.css';

const ratio = 2;

const getWindowSize = () => {
    return {
        windowWidth: `${window.innerWidth}px`,
        windowHeight: `${window.innerHeight}px`,
        divWidth: `${window.innerWidth / ratio}px`,
        divHeight: `${window.innerHeight / ratio}px`
    }
};


function useResize(){
    const [size, setSize] = useState(getWindowSize());

    useEffect(() => {
        function handlerResize(){
            setSize(getWindowSize());
        }
        window.addEventListener('resize', handlerResize);
        return () => window.removeEventListener('resize', handlerResize);
    }, []);
    return size;
}

function MyResize(props) {
    const size = useResize();

    return (
        <div className="warp">
            <div className="resize" style={{
                width: size.divWidth,
                height: size.divHeight
            }}>
                <p>
                    Ширина окна {size.windowWidth}, ширина блока {size.divWidth}
                    <br/>
                    Высота окна {size.windowHeight}, высота блока {size.divHeight}
                </p>
            </div>
        </div>
    );
}

export default MyResize;