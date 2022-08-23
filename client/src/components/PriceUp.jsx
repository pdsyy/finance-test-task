import React from 'react';
import '../styles/App.css'
const PriceUp = () => {
    return (
        <span className = "upArrow">
            <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" style={{fill:'currentcolor'}}>
                <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
            </svg>
        </span>
    );
};

export default PriceUp;