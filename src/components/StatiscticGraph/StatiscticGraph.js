import React from 'react'
import * as d3 from 'd3'
export default function StatisticGraph(props) {
    const {data, width, height, fromToByVertical, wrapperRef} = props

    return (
        <div className="wrapper" ref={wrapperRef}>
            <Chart data={data} width={width} height={height} fromToByVertical={fromToByVertical} />
        </div>
    )
}



//Компонент с самими графиком
//fromToByVertical - пропс с рэнжом по вертикали
const Chart = ({ data, width, height, fromToByVertical }) => {

    const [activeIndex, setActiveIndex] = React.useState(null);

    const getX = d3.scaleBand()
        .domain(data.map(item => item.name))
        .range([0, width]);

    const getY = d3.scaleLinear()
        .domain(fromToByVertical)
        .range([height, 0]);

    const getYAxis = ref => {
        const yAxis = d3.axisLeft(getY)
            .tickSize(-width)
            .tickPadding(7);
        d3.select(ref).call(yAxis);
    };

    const getXAxis = ref => {
        const xAxis = d3.axisBottom(getX);
        d3.select(ref).call(xAxis);
    };

    const linePath = d3.line()
        .x(d => getX(d.name) + getX.bandwidth() / 2)
        .y(d => getY(d.value))
        .curve(d3.curveMonotoneX)(data)

    const areaPath = d3.area()
        .x(d => getX(d.name) + getX.bandwidth() / 2)
        .y0(d => getY(d.value))
        .y1(() => getY(0))
        .curve(d3.curveMonotoneX)(data);

    const handleMouseMove = (e) => {
        const x = e.nativeEvent.offsetX;
        const index = Math.floor(x / getX.step());
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (

        <svg
            className="svg"

            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            width={width}
            height={height}
        >
            <g className="axis" ref={getYAxis} />
            <g
                className="axis xAxis"
                ref={getXAxis}
                transform={`translate(0,${getY(0)})`}
            />
            <path
                fill="#7cb5ec"
                d={areaPath}
                opacity={0.2}
            />
            <path
                strokeWidth={3}
                fill="none"
                stroke="#7cb5ec"
                d={linePath}
            />
            {data.map((item, index) => {
                return (
                    <g key={index}>
                        <circle
                            cx={getX(item.name) + getX.bandwidth() / 2}
                            cy={getY(item.value)}
                            r={index === activeIndex ? 6 : 4}
                            fill="#7cb5ec"
                            strokeWidth={index === activeIndex ? 2 : 0}
                            stroke="#fff"
                            style={{ transition: `ease-out .1s` }}
                        />
                        <text
                            fill="#666"
                            x={getX(item.name) + getX.bandwidth() / 2}
                            y={getY(item.value) - 10}
                            textAnchor="middle"
                        >
                            {item.value}
                        </text>
                    </g>
                );
            })}
        </svg>

    );
};
