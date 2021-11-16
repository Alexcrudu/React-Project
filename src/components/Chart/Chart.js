import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
    const values = props.dataPoints.map((point) => {
        return point.value
    })
const totalMax = Math.max(...values)

    return (
        <div className="chart">
            {props.dataPoints.map((point)=>{
                return <ChartBar key={point.label} value={point.value} max={totalMax} label={point.label}></ChartBar>
            })}


        </div>
    );
}

export default Chart;