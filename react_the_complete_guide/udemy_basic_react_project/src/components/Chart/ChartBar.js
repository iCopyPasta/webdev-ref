import React from 'react'

import './ChartBar.css';

// to let the Chart decide render dynamically based on input
const ChartBar = (props) => {

    // must calculate this specifiy ChartBar instance should fill
    let barFillHeight = "0%"; //will be assigned as CSS style

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    // 'style' in JSX overrides HTML
    // wants an object, use CSS properties as keys
    // NOTE: need quote around property name or camelCase version
    // e.g. backgroundColor or "background-color"
    const styleInput = {
        "height": barFillHeight,
    };

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={styleInput}>
                </div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;