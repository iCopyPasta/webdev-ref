import React from 'react'

import ChartBar from "./ChartBar";

import './Chart.css';

// to let the Chart decide render dynamically based on input
const Chart = (props) => {

    // Array of numbers
    const dataPointValues = props.dataPoints.map( (dataPoint) => {
        return dataPoint.value;
    });

    // via spread operator - pull out as arugments
    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {props.dataPoints.map(
                (dataPoint) => {
                    return (
                        <ChartBar
                            key={dataPoint.label}
                            value={dataPoint.value}
                            maxValue={totalMaximum}
                            label={dataPoint.label}
                        />
                    );
                }
            )}

        </div>
    );

};

export default Chart;