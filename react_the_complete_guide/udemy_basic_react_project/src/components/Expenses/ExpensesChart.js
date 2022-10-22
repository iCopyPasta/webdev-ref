import React from 'react'

import Chart from "../Chart/Chart";
// to let the Chart decide render dynamically based on input
const ExpensesChart = (props) => {

    const chartDataPoint = [
        { label: "Jan", value: 0},
        { label: "Feb", value: 0},
        { label: "Mar", value: 0},
        { label: "Apr", value: 0},
        { label: "May", value: 0},
        { label: "Jun", value: 0},
        { label: "Jul", value: 0},
        { label: "Aug", value: 0},
        { label: "Sep", value: 0},
        { label: "Oct", value: 0},
        { label: "Nov", value: 0},
        { label: "Dec", value: 0}
    ];

    for (const expense of props.expenses) {
        // starting at 0 => January is 0
        const expenseMonth = expense.date.getMonth();

        // increase by expense amount
        chartDataPoint[expenseMonth].value += expense.amount;
    }

    return (
        <Chart dataPoints={chartDataPoint}/>
    );
};

export default ExpensesChart;