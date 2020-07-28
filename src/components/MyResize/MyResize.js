import React, { useState, useEffect } from 'react';
import useResize from "./useResize";
import './index.css';

function MyResize(props) {
    const size = useResize(2);

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