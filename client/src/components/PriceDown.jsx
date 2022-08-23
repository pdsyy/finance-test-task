import React from 'react';
import '../styles/App.css'
const PriceDown = () => {
    return (
        <span className="downArrow">
            <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" style={{fill:'currentcolor'}}>
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
            </svg>
        </span>
    );
};

export default PriceDown;