import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ position, text, children }) => {
    const [visible, setVisible] = useState(false);

    let tooltipClass = "tooltip-box tooltip-" + position;

    return (
        <div className="tooltip-wrapper">
            <div
                className="tooltip-target"
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                {children}
            </div>
            {visible && <div className={tooltipClass}>{text}</div>}
        </div>
    );
};

export default Tooltip;
